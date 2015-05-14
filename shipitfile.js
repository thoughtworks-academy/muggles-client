module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/muggles-client',
      deployTo: '/tmp/deploy_to/client',
      repositoryUrl: 'git@github.com:thoughtworks-academy/muggles-client.git',
      ignores: ['.git', 'node_modules', 'jspm_packages', '.idea', '.tmp', 'dist'],
      keepReleases: 2,
      key: 'id_aliyun',
      shallowClone: true,
      branch: 'development'
    },
    staging: {
      servers: 'root@120.25.232.68'
    }
  });
};
