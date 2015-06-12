var weeklybytag = {
	tagIsActive: false,
	listenerAdded: false,

	receiveMessage: function(message, sender)
	{
		console.debug('Setting "tag" as active option: ' + message)
		if(message == "set-tag-active")
		{
			weeklybytag.tagIsActive = true
		}
	},

	updateHeader: function(groupingContainer)
	{
		if(weeklybytag.tagIsActive)
		{
			console.debug('Setting grouping header for tag')
			var header = groupingContainer.querySelector('span span')
			header.innerHTML = 'Tag'
		}
	},

	updateActiveDropdownItem: function(groupingContainer)
	{
		if(weeklybytag.tagIsActive)
		{
			console.debug('Setting active item to tag for grouping')
			var items = groupingContainer.querySelectorAll('div ul li')

			for(var i = 0; i < items.length; i++)
			{
				items[i].classList.remove('active')
				if(items[i].innerText.trim() == 'Tag')
				{
					items[i].classList.add('active')
				}
			}
		}
	},

	getGroupListingNode: function(groupingContainer)
	{
		return groupingContainer.querySelector('ul')
	},

	generateTagOption: function()
	{
		var item = document.createElement("li")
		item.id = 'group-by-tag'

		var button = document.createElement("button")
		button.innerHTML = 'Tag'
		button.setAttribute('data-value', 'tags')
		button.setAttribute('data-name', 'weekly_grouping')

		item.appendChild(button)

		return item;
	},

	addFAQButtonToTotal: function(weeklyReportContainer)
	{
		if(this.tagIsActive)
		{
			var totalsRow = weeklyReportContainer.querySelector('table tbody tr.no-subgroup:last-child')

			var faqButton = document.createElement('a')
			faqButton.id = 'tag-totals-faq'

			var icon = document.createElement('i')
			icon.classList.add('fa')
			icon.classList.add('fa-question-circle')

			faqButton.appendChild(icon)

			totalsRow.querySelectorAll('td')[1].appendChild(faqButton)

			html5tooltips({
				targetSelector: '#tag-totals-faq',
				contentText: 'Why don\'t the totals add up? These are daily totals, independent of tags.<br/>One entry may use multiple tags which would cause a column total to be inaccurate for the day. ',
				stickTo: 'top',
				disableAnimation: true,
				maxWidth: '100px'
			})
		}
	},

	nodeInsertion: function(event)
	{
		// Catch Angular messing with the DOM.
		var node = event.target
		if(node.nodeType != 1) return

		if(node.id == 'weekly-report')
		{
			console.debug("Weekly report node added, now watching for additional nodes to be inserted")
			node.querySelector("table thead tr th ul li").addEventListener(this.nodeInsertion)
		
			this.addFAQButtonToTotal(node)

			return
		}

		if(node.tagName == 'DIV' && node.parentNode.tagName == 'LI' && node.parentNode.classList.contains('grouping-box'))
		{
			console.debug('Grouping list node inserted, adding the "tag" option')
			
			this.getGroupListingNode(node).appendChild(this.generateTagOption())

			// These items need to occur afterwards, since the grouping elements are re-added each time.
			this.updateHeader(node)
			this.updateActiveDropdownItem(node)

			this.tagIsActive = false
		}

		if(this.listenerAdded == false)
		{
			this.listenerAdded = true
			console.debug('Adding Toggl Weekly tab message listener')
			chrome.runtime.onMessage.addListener(this.receiveMessage)
		}


	}

}