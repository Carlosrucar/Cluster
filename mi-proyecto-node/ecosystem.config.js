module.exports = {
    apps: [
      {
        name: "Clsuter",
        script: "noCluster.js",
        instances: 0,     
        exec_mode: "cluster",
      },
    ],
  };