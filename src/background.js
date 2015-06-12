var sampleData = '{"total_grand":70976000,"total_billable":null,"total_currencies":[{"currency":null,"amount":null}],"data":[{"title":{"user":"George Clooney"},"uid":480214,"totals":[13963000,20609000,24167000,12237000,null,null,null,70976000],"details":[{"pid":4199233,"title":{"client":"American Fidelity","project":"learnin","color":"3","hex_color":"#f68d38"},"totals":[3849000,8371000,null,957000,null,null,null,13177000]},{"pid":6572742,"title":{"client":"American Fidelity","project":"PPT","color":"2","hex_color":"#df7baa"},"totals":[null,null,14400000,null,null,null,null,14400000]},{"pid":5292655,"title":{"client":"App Tech Team","project":"ESB","color":"13","hex_color":"#bc2d07"},"totals":[5825000,null,null,null,null,null,null,5825000]},{"pid":4561202,"title":{"client":"App Tech Team","project":"General Administration","color":"8","hex_color":"#6668b4"},"totals":[null,null,367000,null,null,null,null,367000]},{"pid":4635978,"title":{"client":"App Tech Team","project":"Octopus Deploy General Work","color":"0","hex_color":"#4dc3ff"},"totals":[null,1020000,null,null,null,null,null,1020000]},{"pid":5404098,"title":{"client":"David\'s Team","project":"OSC","color":"9","hex_color":"#a4506c"},"totals":[null,null,null,11280000,null,null,null,11280000]},{"pid":3602180,"title":{"client":"Mary\'s Team","project":"Afenroll","color":"2","hex_color":"#df7baa"},"totals":[null,null,2515000,null,null,null,null,2515000]},{"pid":9442576,"title":{"client":"SSG","project":"9K Floor Design","color":"5","hex_color":"#8ab734"},"totals":[null,3004000,null,null,null,null,null,3004000]},{"pid":7081911,"title":{"client":"Technical Testing Team","project":"Automated Integration Testing","color":"7","hex_color":"#268bb5"},"totals":[1603000,8214000,5757000,null,null,null,null,15574000]},{"pid":4536085,"title":{"client":"Traci\'s Team","project":"AWD Ecenter","color":"13","hex_color":"#bc2d07"},"totals":[2686000,null,1128000,null,null,null,null,3814000]}]}],"week_totals":[13963000,20609000,24167000,12237000,null,null,null,70976000]}'
var sampleRedirect = 'data:application/json,' + sampleData
// var sampleRedirect = "data:application-json;base64,eyJ0b3RhbF9ncmFuZCI6NzA5NzYwMDAsInRvdGFsX2JpbGxhYmxlIjpudWxsLCJ0b3RhbF9jdXJyZW5jaWVzIjpbeyJjdXJyZW5jeSI6bnVsbCwiYW1vdW50IjpudWxsfV0sImRhdGEiOlt7InRpdGxlIjp7InVzZXIiOiJHZW9yZ2UgQ2xvb25leSJ9LCJ1aWQiOjQ4MDIxNCwidG90YWxzIjpbMTM5NjMwMDAsMjA2MDkwMDAsMjQxNjcwMDAsMTIyMzcwMDAsbnVsbCxudWxsLG51bGwsNzA5NzYwMDBdLCJkZXRhaWxzIjpbeyJwaWQiOjQxOTkyMzMsInRpdGxlIjp7ImNsaWVudCI6IkFtZXJpY2FuIEZpZGVsaXR5IiwicHJvamVjdCI6IkVkdWNhdGlvbiIsImNvbG9yIjoiMyIsImhleF9jb2xvciI6IiNmNjhkMzgifSwidG90YWxzIjpbMzg0OTAwMCw4MzcxMDAwLG51bGwsOTU3MDAwLG51bGwsbnVsbCxudWxsLDEzMTc3MDAwXX0seyJwaWQiOjY1NzI3NDIsInRpdGxlIjp7ImNsaWVudCI6IkFtZXJpY2FuIEZpZGVsaXR5IiwicHJvamVjdCI6IlBQVCIsImNvbG9yIjoiMiIsImhleF9jb2xvciI6IiNkZjdiYWEifSwidG90YWxzIjpbbnVsbCxudWxsLDE0NDAwMDAwLG51bGwsbnVsbCxudWxsLG51bGwsMTQ0MDAwMDBdfSx7InBpZCI6NTI5MjY1NSwidGl0bGUiOnsiY2xpZW50IjoiQXBwIFRlY2ggVGVhbSIsInByb2plY3QiOiJFU0IiLCJjb2xvciI6IjEzIiwiaGV4X2NvbG9yIjoiI2JjMmQwNyJ9LCJ0b3RhbHMiOls1ODI1MDAwLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLDU4MjUwMDBdfSx7InBpZCI6NDU2MTIwMiwidGl0bGUiOnsiY2xpZW50IjoiQXBwIFRlY2ggVGVhbSIsInByb2plY3QiOiJHZW5lcmFsIEFkbWluaXN0cmF0aW9uIiwiY29sb3IiOiI4IiwiaGV4X2NvbG9yIjoiIzY2NjhiNCJ9LCJ0b3RhbHMiOltudWxsLG51bGwsMzY3MDAwLG51bGwsbnVsbCxudWxsLG51bGwsMzY3MDAwXX0seyJwaWQiOjQ2MzU5NzgsInRpdGxlIjp7ImNsaWVudCI6IkFwcCBUZWNoIFRlYW0iLCJwcm9qZWN0IjoiT2N0b3B1cyBEZXBsb3kgR2VuZXJhbCBXb3JrIiwiY29sb3IiOiIwIiwiaGV4X2NvbG9yIjoiIzRkYzNmZiJ9LCJ0b3RhbHMiOltudWxsLDEwMjAwMDAsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLDEwMjAwMDBdfSx7InBpZCI6NTQwNDA5OCwidGl0bGUiOnsiY2xpZW50IjoiRGF2aWQncyBUZWFtIiwicHJvamVjdCI6Ik9TQyIsImNvbG9yIjoiOSIsImhleF9jb2xvciI6IiNhNDUwNmMifSwidG90YWxzIjpbbnVsbCxudWxsLG51bGwsMTEyODAwMDAsbnVsbCxudWxsLG51bGwsMTEyODAwMDBdfSx7InBpZCI6MzYwMjE4MCwidGl0bGUiOnsiY2xpZW50IjoiTWFyeSdzIFRlYW0iLCJwcm9qZWN0IjoiQWZlbnJvbGwiLCJjb2xvciI6IjIiLCJoZXhfY29sb3IiOiIjZGY3YmFhIn0sInRvdGFscyI6W251bGwsbnVsbCwyNTE1MDAwLG51bGwsbnVsbCxudWxsLG51bGwsMjUxNTAwMF19LHsicGlkIjo5NDQyNTc2LCJ0aXRsZSI6eyJjbGllbnQiOiJTU0ciLCJwcm9qZWN0IjoiOUsgRmxvb3IgRGVzaWduIiwiY29sb3IiOiI1IiwiaGV4X2NvbG9yIjoiIzhhYjczNCJ9LCJ0b3RhbHMiOltudWxsLDMwMDQwMDAsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLDMwMDQwMDBdfSx7InBpZCI6NzA4MTkxMSwidGl0bGUiOnsiY2xpZW50IjoiVGVjaG5pY2FsIFRlc3RpbmcgVGVhbSIsInByb2plY3QiOiJBdXRvbWF0ZWQgSW50ZWdyYXRpb24gVGVzdGluZyIsImNvbG9yIjoiNyIsImhleF9jb2xvciI6IiMyNjhiYjUifSwidG90YWxzIjpbMTYwMzAwMCw4MjE0MDAwLDU3NTcwMDAsbnVsbCxudWxsLG51bGwsbnVsbCwxNTU3NDAwMF19LHsicGlkIjo0NTM2MDg1LCJ0aXRsZSI6eyJjbGllbnQiOiJUcmFjaSdzIFRlYW0iLCJwcm9qZWN0IjoiQVdEIEVjZW50ZXIiLCJjb2xvciI6IjEzIiwiaGV4X2NvbG9yIjoiI2JjMmQwNyJ9LCJ0b3RhbHMiOlsyNjg2MDAwLG51bGwsMTEyODAwMCxudWxsLG51bGwsbnVsbCxudWxsLDM4MTQwMDBdfV19XSwid2Vla190b3RhbHMiOlsxMzk2MzAwMCwyMDYwOTAwMCwyNDE2NzAwMCwxMjIzNzAwMCxudWxsLG51bGwsbnVsbCw3MDk3NjAwMF19"

var sampleResponseData = '{"total_grand":81418000,"total_billable":null,"total_currencies":[{"currency":null,"amount":null}],"total_count":27,"per_page":50,"data":[{"id":237485175,"pid":5359769,"tid":null,"uid":480214,"description":"Assisting with AFplanserve subversion repo requests","start":"2015-06-04T15:18:21-05:00","end":"2015-06-04T15:59:04-05:00","updated":"2015-06-04T15:59:06-05:00","dur":2443000,"user":"David Roberts","use_stop":true,"client":"Carol\'s Team","project":"Annuities","project_color":"3","project_hex_color":"#f68d38","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["unplanned-work"]},{"id":237435196,"pid":4536085,"tid":null,"uid":480214,"description":"Working on the ECenter stuff. Dealing with secure to flat connections","start":"2015-06-04T13:05:01-05:00","end":"2015-06-04T15:18:20-05:00","updated":"2015-06-04T15:18:21-05:00","dur":7999000,"user":"David Roberts","use_stop":true,"client":"Traci\'s Team","project":"AWD Ecenter","project_color":"13","project_hex_color":"#bc2d07","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":237314190,"pid":5404098,"tid":null,"uid":480214,"description":"Assisting with OSC production slowdown.","start":"2015-06-04T08:52:00-05:00","end":"2015-06-04T12:00:00-05:00","updated":"2015-06-04T13:04:22-05:00","dur":11280000,"user":"David Roberts","use_stop":true,"client":"David\'s Team","project":"OSC","project_color":"9","project_hex_color":"#a4506c","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["unplanned-work"]},{"id":237305500,"pid":4199233,"tid":null,"uid":480214,"description":"Reading articles","start":"2015-06-04T08:36:05-05:00","end":"2015-06-04T08:52:02-05:00","updated":"2015-06-04T11:18:16-05:00","dur":957000,"user":"David Roberts","use_stop":true,"client":"American Fidelity","project":"Education","project_color":"3","project_hex_color":"#f68d38","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["training-education"]},{"id":237057166,"pid":7081911,"tid":null,"uid":480214,"description":"Working with Mike to check network speeds","start":"2015-06-03T16:24:39-05:00","end":"2015-06-03T17:07:10-05:00","updated":"2015-06-03T17:07:10-05:00","dur":2551000,"user":"David Roberts","use_stop":true,"client":"Technical Testing Team","project":"Automated Integration Testing","project_color":"7","project_hex_color":"#268bb5","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":237050684,"pid":4536085,"tid":null,"uid":480214,"description":"Working on the ECenter stuff. Dealing with secure to flat connections","start":"2015-06-03T16:05:49-05:00","end":"2015-06-03T16:24:37-05:00","updated":"2015-06-04T13:05:00-05:00","dur":1128000,"user":"David Roberts","use_stop":true,"client":"Traci\'s Team","project":"AWD Ecenter","project_color":"13","project_hex_color":"#bc2d07","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":237033724,"pid":7081911,"tid":null,"uid":480214,"description":"Checking tests ability to hit selerix servers","start":"2015-06-03T15:22:19-05:00","end":"2015-06-03T15:38:20-05:00","updated":"2015-06-03T15:38:21-05:00","dur":961000,"user":"David Roberts","use_stop":true,"client":"Technical Testing Team","project":"Automated Integration Testing","project_color":"7","project_hex_color":"#268bb5","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":237017195,"pid":3602180,"tid":null,"uid":480214,"description":"Moving rules to separate project for deployment","start":"2015-06-03T14:40:21-05:00","end":"2015-06-03T15:22:16-05:00","updated":"2015-06-03T15:22:17-05:00","dur":2515000,"user":"David Roberts","use_stop":true,"client":"Mary\'s Team","project":"Afenroll","project_color":"2","project_hex_color":"#df7baa","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":237001533,"pid":7081911,"tid":null,"uid":480214,"description":"Checking tests ability to hit selerix servers","start":"2015-06-03T14:02:41-05:00","end":"2015-06-03T14:40:06-05:00","updated":"2015-06-03T14:40:07-05:00","dur":2245000,"user":"David Roberts","use_stop":true,"client":"Technical Testing Team","project":"Automated Integration Testing","project_color":"7","project_hex_color":"#268bb5","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":236982587,"pid":4561202,"tid":null,"uid":480214,"description":"Catching up on email","start":"2015-06-03T13:19:01-05:00","end":"2015-06-03T13:25:08-05:00","updated":"2015-06-03T13:25:09-05:00","dur":367000,"user":"David Roberts","use_stop":true,"client":"App Tech Team","project":"General Administration","project_color":"8","project_hex_color":"#6668b4","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["administrative"]},{"id":237070110,"pid":6572742,"tid":null,"uid":480214,"description":"PPT (Sick)","start":"2015-06-03T08:00:00-05:00","end":"2015-06-03T12:00:00-05:00","updated":"2015-06-03T17:07:35-05:00","dur":14400000,"user":"David Roberts","use_stop":true,"client":"American Fidelity","project":"PPT","project_color":"2","project_hex_color":"#df7baa","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["time-off"]},{"id":236547854,"pid":4199233,"tid":null,"uid":480214,"description":"Reading articles","start":"2015-06-02T15:42:14-05:00","end":"2015-06-02T16:38:48-05:00","updated":"2015-06-04T11:18:11-05:00","dur":3394000,"user":"David Roberts","use_stop":true,"client":"American Fidelity","project":"Education","project_color":"3","project_hex_color":"#f68d38","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["training-education"]},{"id":236542196,"pid":4635978,"tid":null,"uid":480214,"description":"David H Octopus Reviewer training","start":"2015-06-02T15:10:00-05:00","end":"2015-06-02T15:27:00-05:00","updated":"2015-06-02T15:28:13-05:00","dur":1020000,"user":"David Roberts","use_stop":true,"client":"App Tech Team","project":"Octopus Deploy General Work","project_color":"0","project_hex_color":"#4dc3ff","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["unplanned-work"]},{"id":236541753,"pid":9442576,"tid":null,"uid":480214,"description":"9K Update with Ngan","start":"2015-06-02T14:00:00-05:00","end":"2015-06-02T14:35:00-05:00","updated":"2015-06-02T15:27:07-05:00","dur":2100000,"user":"David Roberts","use_stop":true,"client":"SSG","project":"9K Floor Design","project_color":"5","project_hex_color":"#8ab734","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["department-meetings"]},{"id":236495152,"pid":4199233,"tid":null,"uid":480214,"description":"Reading articles","start":"2015-06-02T13:36:00-05:00","end":"2015-06-02T14:00:00-05:00","updated":"2015-06-04T11:18:08-05:00","dur":1440000,"user":"David Roberts","use_stop":true,"client":"American Fidelity","project":"Education","project_color":"3","project_hex_color":"#f68d38","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["training-education"]},{"id":236477445,"pid":7081911,"tid":null,"uid":480214,"description":"Checking tests ability to hit selerix servers","start":"2015-06-02T12:55:20-05:00","end":"2015-06-02T13:10:16-05:00","updated":"2015-06-02T13:10:16-05:00","dur":896000,"user":"David Roberts","use_stop":true,"client":"Technical Testing Team","project":"Automated Integration Testing","project_color":"7","project_hex_color":"#268bb5","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":236388342,"pid":7081911,"tid":null,"uid":480214,"description":"Checking tests ability to hit selerix servers","start":"2015-06-02T10:01:00-05:00","end":"2015-06-02T11:25:00-05:00","updated":"2015-06-02T12:55:26-05:00","dur":5040000,"user":"David Roberts","use_stop":true,"client":"Technical Testing Team","project":"Automated Integration Testing","project_color":"7","project_hex_color":"#268bb5","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":236378839,"pid":9442576,"tid":null,"uid":480214,"description":"9K images for showing to Diana","start":"2015-06-02T09:46:29-05:00","end":"2015-06-02T10:01:33-05:00","updated":"2015-06-02T10:01:33-05:00","dur":904000,"user":"David Roberts","use_stop":true,"client":"SSG","project":"9K Floor Design","project_color":"5","project_hex_color":"#8ab734","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["department-meetings"]},{"id":236355222,"pid":7081911,"tid":null,"uid":480214,"description":"Checking tests ability to hit selerix servers","start":"2015-06-02T09:08:17-05:00","end":"2015-06-02T09:46:15-05:00","updated":"2015-06-02T09:46:15-05:00","dur":2278000,"user":"David Roberts","use_stop":true,"client":"Technical Testing Team","project":"Automated Integration Testing","project_color":"7","project_hex_color":"#268bb5","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":236319289,"pid":4199233,"tid":null,"uid":480214,"description":"Reading articles","start":"2015-06-02T08:09:17-05:00","end":"2015-06-02T09:08:14-05:00","updated":"2015-06-04T11:18:04-05:00","dur":3537000,"user":"David Roberts","use_stop":true,"client":"American Fidelity","project":"Education","project_color":"3","project_hex_color":"#f68d38","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["training-education"]},{"id":235973206,"pid":5292655,"tid":null,"uid":480214,"description":"Review of esb monitor","start":"2015-06-01T13:13:01-05:00","end":"2015-06-01T14:02:29-05:00","updated":"2015-06-01T14:02:30-05:00","dur":2968000,"user":"David Roberts","use_stop":true,"client":"App Tech Team","project":"ESB","project_color":"13","project_hex_color":"#bc2d07","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":235892712,"pid":7081911,"tid":null,"uid":480214,"description":"Checking tests ability to hit selerix servers","start":"2015-06-01T10:50:47-05:00","end":"2015-06-01T11:08:35-05:00","updated":"2015-06-01T11:08:35-05:00","dur":1068000,"user":"David Roberts","use_stop":true,"client":"Technical Testing Team","project":"Automated Integration Testing","project_color":"7","project_hex_color":"#268bb5","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":235874373,"pid":5292655,"tid":null,"uid":480214,"description":"Review of esb monitor","start":"2015-06-01T10:20:18-05:00","end":"2015-06-01T10:50:43-05:00","updated":"2015-06-01T10:50:44-05:00","dur":1825000,"user":"David Roberts","use_stop":true,"client":"App Tech Team","project":"ESB","project_color":"13","project_hex_color":"#bc2d07","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":235845651,"pid":4536085,"tid":null,"uid":480214,"description":"Testing run of ecenter importer with bot transferer","start":"2015-06-01T09:34:43-05:00","end":"2015-06-01T10:19:29-05:00","updated":"2015-06-01T10:19:29-05:00","dur":2686000,"user":"David Roberts","use_stop":true,"client":"Traci\'s Team","project":"AWD Ecenter","project_color":"13","project_hex_color":"#bc2d07","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":235839487,"pid":7081911,"tid":null,"uid":480214,"description":"Checking tests ability to hit selerix servers","start":"2015-06-01T09:25:23-05:00","end":"2015-06-01T09:34:18-05:00","updated":"2015-06-01T09:34:18-05:00","dur":535000,"user":"David Roberts","use_stop":true,"client":"Technical Testing Team","project":"Automated Integration Testing","project_color":"7","project_hex_color":"#268bb5","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":235828421,"pid":5292655,"tid":null,"uid":480214,"description":"Setup ESB monitor in code review tool","start":"2015-06-01T09:07:41-05:00","end":"2015-06-01T09:24:53-05:00","updated":"2015-06-01T09:24:53-05:00","dur":1032000,"user":"David Roberts","use_stop":true,"client":"App Tech Team","project":"ESB","project_color":"13","project_hex_color":"#bc2d07","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["service-request-fcap"]},{"id":235788786,"pid":4199233,"tid":null,"uid":480214,"description":"Reading articles","start":"2015-06-01T08:03:13-05:00","end":"2015-06-01T09:07:22-05:00","updated":"2015-06-01T09:07:22-05:00","dur":3849000,"user":"David Roberts","use_stop":true,"client":"American Fidelity","project":"Education","project_color":"3","project_hex_color":"#f68d38","task":null,"billable":null,"is_billable":false,"cur":null,"tags":["training-education"]}]}'
function GetReportData(workspaceId, since, until, done)
{
	var apiKey = 'f738d94b57d22dccd46c01a7f3ad2ed7'
	console.debug("Getting report data")
	var baseUrl = 'https://toggl.com/reports/api/v2/details'

	since = since.getFullYear() + '-' + since.toLocaleString('en-US', {month:'2-digit'}) + '-' + since.toLocaleString('en-US',{day:'2-digit'})
	until = until.getFullYear() + '-' + until.toLocaleString('en-US', {month:'2-digit'}) + '-' + until.toLocaleString('en-US',{day:'2-digit'})

	var requestUrl = baseUrl + '?user_agent=david.roberts63@gmail.com&workspace_id=' + workspaceId + '&since=' + since + '&until=' + until
	var authenticationMode = 'Basic ' + btoa(apiKey + ':api_token')
	var headers = { Authorization: authenticationMode }

	var request = new XMLHttpRequest()
	request.open('GET', requestUrl, false)
	request.setRequestHeader('Authorization', authenticationMode)
	request.send(null)

	if (request.status - 200 >= 100) { // If it's in the 200 'It went okay in some fasion' response codes.
		console.warn('Problem getting deatiled report data (' + status + '): ' + response)
		return
	} else {
		return JSON.parse(request.responseText)
	}

	/*
	nanoajax.ajax({ url: requestUrl, headers: headers, withCredentials: true }, function(status, response){
		if (status - 200 >= 100) { // If it's in the 200 'It went okay in some fashion' response codes.
			console.warn('Problem getting deatiled report data (' + status + '): ' + response)
			done(false)
			return
		}

		console.debug(response)
		done(JSON.parse(response))
	});
	*/	
}

function ProcessReportData(reportData)
{

}

function AddTimeToTag(timeData, dayNumber, tagName, tags)
{
	console.debug("--tag: " + tagName)
	if(tags[tagName] == undefined)
	{
		tags[tagName] = { title: { "user": tagName }, "uid": 0, totals: [0,0,0,0,0,0,0,0], details: [] }
	}

	var destination = tags[tagName]
	tags[tagName].totals[dayNumber] += timeData.dur
	tags[tagName].totals[7] += timeData.dur
}

chrome.webRequest.onBeforeRequest.addListener(function(details) 
	{ 
		console.debug('Request for weekly report api: ' + details.url)
		console.debug(details)
		var detailedData = JSON.parse(sampleResponseData)
		var uri = parseUri(details.url)
		var since = new Date(Date.parse(uri.queryKey.since))
		var until = new Date(Date.parse(uri.queryKey.until))

		var allTags = {}
		var weekTotals = [0,0,0,0,0,0,0,0]

		detailedData = GetReportData(uri.queryKey.workspace_id, since, until, function() {})
		if (detailedData['data'] == undefined) { detailedData = JSON.parse(sampleResponseData); console.warn('No data from request') }

		console.debug("Working since " + since.toDateString() + " until " + until.toDateString())
		console.debug("Working through " + detailedData.data.length + " data items.")
		for(var i = 0; i < detailedData.data.length; i++)
		{
			var source = detailedData.data[i]
			var dayNumber = new Date(Date.parse(source.start)) - since
			dayNumber = Math.floor(dayNumber / (1000 * 60 * 60 * 24))
			console.debug("Date = " + (new Date(Date.parse(source.start)).toDateString()) + ", Daynumber = " + dayNumber)

			for(var tagi = 0; tagi < source.tags.length; tagi++)
			{
				var tagName = source.tags[tagi]
				AddTimeToTag(source, dayNumber, tagName, allTags)
			}
			
			if (source.tags.length == 0)
			{
				AddTimeToTag(source, dayNumber, '[Not Tagged]', allTags)
			}

			weekTotals[dayNumber] += source.dur
			weekTotals[7] += source.dur
		}

		var byTag = {}
		byTag.total_grand = weekTotals[7]
		byTag.total_billable = 0
		byTag.total_currencies = [{ "currency": null, "amount": null }]
		byTag.data = []

		var tagNames = Object.keys(allTags)
		tagNames.sort()
		for(tag of tagNames)
		{
			byTag.data.push(allTags[tag])
		}

		byTag.week_totals = weekTotals

		var raw = JSON.stringify(byTag)
		var redirect = 'data:application/json,' + raw

		chrome.tabs.sendMessage(details.tabId, "set-tag-active")
		return {redirectUrl: redirect}
	},
	{ urls: ['https://www.toggl.com/reports/api/v2/weekly.json?grouping=tags*'] },
	["blocking"]
)