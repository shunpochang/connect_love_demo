# connect-love demo App
![alt text](https://github.com/shunpochang/file_dump/blob/master/images/connect_love_demo_img.png "connect-love demo")
### Code for https://connect-love.appspot.com/, where I set up a basic GAE app using Django and React.
###### Following the steps in [Google App Engine + Django](https://cloud.google.com/python/django/appengine) and brushing up on the commenting tool covered in my [Django + React tutorial](https://github.com/shunpochang/examples), here's and end-to-end outline to deploy a React App to GAE with Django backend.
###### WHY the combo?
* React: The virtual-dom and modularity sets up greatly for scalable web technologies (also, I am trying out Reach-native to try deploying a light-weight app across all platforms).
  * *Facebook, Instagram, Khan Academy, and Netflix* all use React.
* Django: The most popular backend management framework that also allows powerful data management with its ORM model.
  * *Instagram, Pinterest, Eventbrite* and many more all use Django.
* Google App Engine: Platform as a service from Google to help Apps scale automatically with auto load-balancing and data replication.
  * *Snapchat, Rovio (angry birds), Udacity*, and Google internal tools are hosted on GAE.

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
