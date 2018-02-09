function(con, a) //script:#s.user.script, param:{nav|action etc.:"blogs|post etc."}, filter:"projects or usernames"
{
	var c = con.caller;
	var l = #fs.scripts.lib();

	var pX = /((project ).+(has|come))|((review of)\ .*?,{1})|((for)\ .*?\ (since))|((continues on)\ .*?\ )/g; //project regex
	var uX = /.*?\ (of project)\ |(--)\ .*?\ (when)/g; //user regex

	let m = ""; //matches
	let s = "";
	let r = a.script.call(a.param);
	if(a.filter == "projects")
	{
		m += "projects:\n";
		while((s=pX.exec(r)) != null)
		{
			m += s[0]+"\n";
		}
	}
	else
	{
		m += "usernames:\n";
		while((s=uX.exec(r)) != null)
		{
			m += s[0]+"\n";
		}
	}

	return {ok:true, msg:m};
}
