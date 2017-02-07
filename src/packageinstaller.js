var arr = [ "KittenService: CamelCaser", "CamelCaser: " ]

function packageInstaller(arr) {
	var installed = [];
	var packages = [];

	createPackageObjects();
  
    packages.forEach(function(package) {
      if (package.ableToInstall) {
        installPackage.call(package)
      }
    })
    
    console.log(packages)
    console.log(installed)
    
	function createPackageObjects() {
		arr.forEach(function(item) {
			var splitItem = item.split(': ');
			var package = {
				name: splitItem[0],
				dependencies: splitItem[1] ? splitItem[1].split(', '): 0,
				installed: false,
				ableToInstall: false
			}

			if(!package.dependencies) package.ableToInstall = true;
			packages.push(package);
		});
	}

	function installPackage() {
		if(this.ableToInstall && installed.indexOf(this.name) === -1){
			installed.push(this.name);
			this.installed = true;
		}
	}
  
 }



