function startTogglWeeklyByTag()
{
	console.debug('Adding Toggl Weekly by tag onload listener')
	document.body.addEventListener('DOMNodeInserted', function(event) { weeklybytag.nodeInsertion(event) })
}

startTogglWeeklyByTag()