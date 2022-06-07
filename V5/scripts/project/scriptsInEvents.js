class AppInterface  {

	static showToast(msg){
		let jsonToast = {};
			jsonToast.toast = msg;
        console.log('showToast', jsonToast);
		   if (window && window.ReactNativeWebView) {
		   
			window.ReactNativeWebView.postMessage(jsonToast);
		}
		
	}
	static sendToApp(data){		
		let json_str = JSON.stringify(data);
		console.log("Send data to Webview", json_str);
		if (window && window.ReactNativeWebView) {
			window.ReactNativeWebView.postMessage(json_str);
		}
		

	}
}


const scriptsInEvents = {

		async Egame_Event1_Act1(runtime, localVars)
		{
			var currentdate = new Date(); 
			var datetime = currentdate.getDate() + "/"
			                + (currentdate.getMonth()+1)  + "/" 
			                + currentdate.getFullYear() + "@"  
			                + currentdate.getHours() + ":"  
			                + currentdate.getMinutes() + ":" 
			                + currentdate.getSeconds();			
			runtime.globalVars.StartDateTime = datetime;
		},

		async Egame_Event3_Act1(runtime, localVars)
		{
			// runtime.goToLayout("Level1-Tutorial");
			const nextLevel = runtime.globalVars.GameLevel;
			console.log("nextlevel", nextLevel);
				if(nextLevel == 0){
				runtime.goToLayout("Level"+nextLevel+"-Start");
				}else if(eval("runtime.globalVars.L"+nextLevel+"_Tutorial_Done")){
				runtime.goToLayout("Level"+nextLevel);
				}
			else{
			runtime.goToLayout("Level"+nextLevel+"-Tutorial");
			}
			
		},

		async Es_common_Event122_Act1(runtime, localVars)
		{
			localStorage.setItem(runtime.globalVars.LOCAL_GAME_KEY, JSON.stringify(runtime.getInstanceByUid(runtime.globalVars.JSON_UID).getJsonDataCopy()));
			console.log(runtime.getInstanceByUid(runtime.globalVars.JSON_UID).getJsonDataCopy())
		},

		async Es_common_Event123_Act4(runtime, localVars)
		{
			AppInterface.sendToApp(runtime.getInstanceByUid(runtime.globalVars.JSON2_UID).getJsonDataCopy());
		},

		async Es_common_Event125_Act1(runtime, localVars)
		{
			
			const nextLevel = runtime.globalVars.CurrentLevel+1;
			
			
				if(eval("runtime.globalVars.L"+nextLevel+"_Tutorial_Done")){
				runtime.goToLayout("Level"+nextLevel);
				}
			else{
			runtime.goToLayout("Level"+nextLevel+"-Tutorial");
			}
			
		},

		async Es_common_Event227_Act48(runtime, localVars)
		{
			localStorage.setItem(runtime.globalVars.LOCAL_GAME_KEY, JSON.stringify(runtime.getInstanceByUid(runtime.globalVars.JSON_UID).getJsonDataCopy()));
			if(AppInterface!="undefined")
			AppInterface.sendToApp(runtime.getInstanceByUid(runtime.globalVars.JSON_UID).getJsonDataCopy());
			else console.log("AppInterface is not defined");
			
		},

		async Es_common_Event301_Act1(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			
			let colors = ["rgb(201, 217, 128)", "rgb(201, 217, 128)", "rgb(201, 217, 128)", "rgb(201, 217, 128)", "rgb(163, 6, 6)"  ]
			document.body.style.backgroundColor = colors[level];
			document.getElementsByTagName("html")[0].style.background = colors[level];
			
		},

		async Es_level1_Event53_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem(runtime.globalVars.LOCAL_GAME_KEY));
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(runtime.globalVars.JSON_UID).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic;
		},

		async Es_level2_Event51_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem(runtime.globalVars.LOCAL_GAME_KEY));
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(runtime.globalVars.JSON_UID).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic;
		},

		async Es_level3_Event53_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem(runtime.globalVars.LOCAL_GAME_KEY));
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(runtime.globalVars.JSON_UID).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic;
		},

		async Es_level4_Event47_Act4(runtime, localVars)
		{
			let strData = localStorage.getItem(runtime.globalVars.LOCAL_GAME_KEY);
			console.log("strData>>>"+strData+"::"+runtime.globalVars.LOCAL_GAME_KEY);
			if(strData)
			{let data = JSON.parse(strData);
			
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(runtime.globalVars.JSON_UID).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic;}
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

