# connect-love demo App
### Code for https://connect-love.appspot.com/, where we set up a basic GAE app using Django and React.
###### Following the steps in [Google App Engine + Django](https://cloud.google.com/python/django/appengine) and a brush up of the commenting tool covered in my [Django + React tutorial](https://github.com/shunpochang/examples), I outlined the end-to-end need to deploy a React App to GAE with Django backend.
###### WHY the combo?
* React: The virtual-dom and modularity sets up greatly for scalable web technologies (also, I will try out Reach-native as a Part II tutorial of deploying light-weight end-to-end native app).
  * *Facebook, Instagram, Khan Academy, and Netflix* all use React.
* Django: The most popular backend management framework that also allows powerful data management with its ORM model.
  * *Instagram, Pinterest, Eventbrite* and a lot more all use Django.
* Google App Engine: Platform as a service from Google to help Apps scale automatically with auto load-balancing and data replication.
  * *Snapchat, Rovio (angry birds), Udacity*, and Google internal tools all are hosted on GAE.

---

##### Steps to set up the testing environment.

Setup virtualenv (optional)
```bash
virtualenv ve
. ve/bin/activate
```

Install dependencies
```bash
# Installs all JS dependencies.
npm install
# Install python dependencies needed in runtime under lib/.
pip install -r requirements-vendor.txt -t lib/
# Install other python dependencies not needed by App Enginge regularly.
pip install -r requirements-local.txt
```

Run continuous webpack compiler to get static JS, CSS files.
```bash
./node_modules/.bin/webpack --config webpack.config.js --watch
```

Create django db table (first follow steps from GAE tutorial to first create Cloud SQL database).
```bash
./manage.py makemigrations comment
./manage.py migrate
```

Run django server for development.
```bash
./manage.py runserver
```

After iteration is done, run local server through app.yaml to make sure that all directory is correctly linked for GAE.
```bash
# dev_appserver is installed through GAE SDK.
dev_appserver app.yaml
```

Deploy when you are ready (and have registered a GAE project).
```bash
# First collect all static files, which is set to be dumped to dist/ in settings.py
./manage.py collectstatic
# Deploy like a boss, and appcfg.py is also installed through GAE SDK.
appcfg.py -A [project-id] update app.yaml
```
