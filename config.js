System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.15",
    "angular-mocks": "github:angular/bower-angular-mocks@1.3.15",
    "angular-route": "github:angular/bower-angular-route@1.3.15",
    "babel": "npm:babel@4.7.16",
    "babel-runtime": "npm:babel-runtime@4.7.16",
    "core-js": "npm:core-js@0.9.6",
    "jquery": "github:components/jquery@2.1.3",
    "moment": "npm:moment@2.10.2",
    "xiaoyanzhuzzh/Semantic-UI": "github:xiaoyanzhuzzh/Semantic-UI@master",
    "github:angular/bower-angular-mocks@1.3.15": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:angular/bower-angular-route@1.3.15": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@4.7.16": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.6": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:moment@2.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

