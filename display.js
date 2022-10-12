function display() {
	// Process all the releases.
	let d0 = '1995-01-01';
	let table = {};
	let columns = {};
	let columnsCount = 0;
	let columnWidth = 55;
	let str = '';

	for (let date in dates) {
		versions = dates[date];
		let days = dateDiff(date, d0);
		
		let versionsInColumns = {};
		for (let i = 0; i < versions.length; i++) {
			let version = versions[i];
			let mainVersion = minorVersion(version);
			if (columns[mainVersion] === undefined) {
				columns[mainVersion] = columnsCount;
				columnsCount++;
			}
			let column = columns[mainVersion];
			versionsInColumns[column] = version;
		}

		table[days] = {
			date: date,
			versions: versionsInColumns
		};
	}

	// years
	let thisYear = new Date().getFullYear();
	for (let i = dateFromIso8601(d0).getFullYear(); i <= thisYear; i++) {
		str += '<div class="year';
		if (i % 2) {
			str += ' odd';
		}
		str += '" style="top:' + dateDiff(i + '-01-01', d0) + 'px;">' + i + '</div>';
	}

	// Versions
	let bars = {};
	for (let days in table) {
		let day = table[days];
		for (let column in day.versions) {
			let version = day.versions[column];
			if (bars[column] === undefined) {
				bars[column] = {
					version: version,
					from: days
				};
			}
			bars[column].to = days;
		}
	}

	// minor versions
	for (let column in bars) {
		let bounds = bars[column];
		let version = minorVersion(bounds.version);
		str += '<div class="version ' + getSupport(version) + '" style="top:' + (bounds.from - 20) + 'px;left:' + (column * columnWidth) + 'px;height:' + (bounds.to - bounds.from + 35) + 'px;width:' + (columnWidth - 5) + 'px;" title="Version ' + version + '">' + version + '</div>';
	}

	// releases
	for (let days in table) {
		let day = table[days];
		for (column in day.versions) {
			let version = day.versions[column];
			str += '<div class="release" style="top:' + days + 'px;left:' + (column * columnWidth) + 'px;width:' + (columnWidth - 5) + 'px;" title="' + version + ' released ' + day.date + '">' + version + '</div>';
		}
	}

	return str;
}

function minorVersion(version) {
	let fullVersion = version.split('.');
	return fullVersion[0] + '.' + fullVersion[1];
}

function dateDiff(date1, date0) {
	let d0 = dateFromIso8601(date0);
	let d1 = dateFromIso8601(date1);
	let microsecondsInDay = 86400000;
	
	return Math.floor((d1.getTime() - d0.getTime())/microsecondsInDay);
}

function dateFromIso8601(iso8601) {
	let d = iso8601.split('-');
	return new Date(d[0], d[1] - 1, d[2]);
}

(function() {
	document.getElementById('table').innerHTML = display();
})();

