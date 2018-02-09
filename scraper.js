function(con, a) //script:#s.user.script, param:{nav|action etc.:"blogs|post etc."}, filter:"projects or usernames"
{
	var c = con.caller;
	var l = #fs.scripts.lib();

	var pX = /((project ).+(has|come))|((review of)\ .*?,{1})|((for)\ .*?\ (since))|((continues on)\ .*?\ )/g; //project regex
	var uX = /.*?\ (of project)\ |(--)\ .*?\ (when)/g; //user regex

	let m = ""; //matches
	let s = "";
	let pm = ""; //prematch
	let r = a.script.call(a.param);
	if(a.filter == "projects")
	{
		while((s=pX.exec(r)) != null)
		{
			pm = s[0].replace(",","").split(" ");
			if(pm[1].length > pm[2].length)
			{
				m += pm[1];
			}
			else
			{
				m += pm[2];
			}
			m+="\n";
		}
	}
	else
	{
		while((s=uX.exec(r)) != null)
		{
			pm = s[0].split(" ");
			if(pm[1].length > pm[0].length)
			{
				m += pm[1];
			}
			else
			{
				m += pm[0];
			}
			m+="\n";
		}
	}

	return {ok:true, msg:m};
}

