$.getAll = function (
	urls, // array of URLs
	onLoad, // called when any URL is loaded, params (index, data)
	onDone, // called when all URLs successfully loaded, no params
	onError // called when a URL load fails or if onLoad throws an exception, params (error)
) {
	var numDone = 0;
	var lastRequestTime = 0;
	var minWaitTime = 200; // ms between requests
	loadNext();

	function loadNext() {
		if (numDone == urls.length) {
			onDone();
			return;
		}

		let now = Date.now();
		let timeElapsed = now - lastRequestTime;
		if (timeElapsed < minWaitTime) {
			let timeRemaining = minWaitTime - timeElapsed;
			setTimeout(loadNext, timeRemaining);
			return;
		}
		console.log('Getting ', urls[numDone]);
		$("#progress").css("width", `${(numDone + 1) / urls.length * 100}%`);
		$("#progress")[0].innerText = numDone + " / " + urls.length
		lastRequestTime = now;
		$.get(urls[numDone])
			.done((data) => {
				try {
					onLoad(numDone, data);
					++numDone;
					loadNext();
				} catch (e) {
					onError(e);
				}
			})
			.fail((xhr) => {
				onError(xhr);
			})
	}
};

var urlGeral = "/pt.twstats.com/ptp5/index.php?page=tribe&mode=members&id=1&compare=points";

    $.get(urlGeral)
		.done((data) => {
        /* ------------------------- NOMES ------------------------- */
    var name_1 = jQuery('#members tbody tr:eq(1) td:eq(1)').text().trim();
    var name_2 = jQuery('#members tbody tr:eq(2) td:eq(1)').text().trim();
    var name_3 = jQuery('#members tbody tr:eq(3) td:eq(1)').text().trim();
    var name_4 = jQuery('#members tbody tr:eq(4) td:eq(1)').text().trim();
    var name_5 = jQuery('#members tbody tr:eq(5) td:eq(1)').text().trim();
    var name_6 = jQuery('#members tbody tr:eq(6) td:eq(1)').text().trim();
    var name_7 = jQuery('#members tbody tr:eq(7) td:eq(1)').text().trim();
    var name_8 = jQuery('#members tbody tr:eq(8) td:eq(1)').text().trim();
    var name_9 = jQuery('#members tbody tr:eq(9) td:eq(1)').text().trim();
    var name_10 = jQuery('#members tbody tr:eq(10) td:eq(1)').text().trim();
    var name_11 = jQuery('#members tbody tr:eq(11) td:eq(1)').text().trim();
    var name_12 = jQuery('#members tbody tr:eq(12) td:eq(1)').text().trim();
    var name_13 = jQuery('#members tbody tr:eq(13) td:eq(1)').text().trim();
    var name_14 = jQuery('#members tbody tr:eq(14) td:eq(1)').text().trim();
    var name_15 = jQuery('#members tbody tr:eq(15) td:eq(1)').text().trim();
    var name_16 = jQuery('#members tbody tr:eq(16) td:eq(1)').text().trim();
    var name_17 = jQuery('#members tbody tr:eq(17) td:eq(1)').text().trim();
    var name_18 = jQuery('#members tbody tr:eq(18) td:eq(1)').text().trim();
    var name_19 = jQuery('#members tbody tr:eq(19) td:eq(1)').text().trim();
    var name_20 = jQuery('#members tbody tr:eq(20) td:eq(1)').text().trim();
    var name_21 = jQuery('#members tbody tr:eq(21) td:eq(1)').text().trim();
    var name_22 = jQuery('#members tbody tr:eq(22) td:eq(1)').text().trim();
    var name_23 = jQuery('#members tbody tr:eq(23) td:eq(1)').text().trim();
    var name_24 = jQuery('#members tbody tr:eq(24) td:eq(1)').text().trim();
    var name_25 = jQuery('#members tbody tr:eq(25) td:eq(1)').text().trim();
    var name_26 = jQuery('#members tbody tr:eq(26) td:eq(1)').text().trim();
    var name_27 = jQuery('#members tbody tr:eq(27) td:eq(1)').text().trim();
    var name_28 = jQuery('#members tbody tr:eq(28) td:eq(1)').text().trim();
    var name_29 = jQuery('#members tbody tr:eq(29) td:eq(1)').text().trim();
    var name_30 = jQuery('#members tbody tr:eq(30) td:eq(1)').text().trim();
    var name_31 = jQuery('#members tbody tr:eq(31) td:eq(1)').text().trim();
    var name_32 = jQuery('#members tbody tr:eq(32) td:eq(1)').text().trim();
    var name_33 = jQuery('#members tbody tr:eq(33) td:eq(1)').text().trim();
    var name_34 = jQuery('#members tbody tr:eq(34) td:eq(1)').text().trim();
    var name_35 = jQuery('#members tbody tr:eq(35) td:eq(1)').text().trim();
    var name_36 = jQuery('#members tbody tr:eq(36) td:eq(1)').text().trim();
    var name_37 = jQuery('#members tbody tr:eq(37) td:eq(1)').text().trim();
    var name_38 = jQuery('#members tbody tr:eq(38) td:eq(1)').text().trim();
    var name_39 = jQuery('#members tbody tr:eq(39) td:eq(1)').text().trim();
    var name_40 = jQuery('#members tbody tr:eq(40) td:eq(1)').text().trim();
    var name_41 = jQuery('#members tbody tr:eq(41) td:eq(1)').text().trim();
    var name_42 = jQuery('#members tbody tr:eq(42) td:eq(1)').text().trim();
    var name_43 = jQuery('#members tbody tr:eq(43) td:eq(1)').text().trim();
    var name_44 = jQuery('#members tbody tr:eq(44) td:eq(1)').text().trim();
    var name_45 = jQuery('#members tbody tr:eq(45) td:eq(1)').text().trim();
    var name_46 = jQuery('#members tbody tr:eq(46) td:eq(1)').text().trim();
    var name_47 = jQuery('#members tbody tr:eq(47) td:eq(1)').text().trim();
    var name_48 = jQuery('#members tbody tr:eq(48) td:eq(1)').text().trim();
    var name_49 = jQuery('#members tbody tr:eq(49) td:eq(1)').text().trim();
    var name_50 = jQuery('#members tbody tr:eq(50) td:eq(1)').text().trim();
        /* ------------------------- PONTOS ------------------------- */
    var points_1 = jQuery('#members tbody tr:eq(1) td:eq(2)').text().trim();
    var points_2 = jQuery('#members tbody tr:eq(2) td:eq(2)').text().trim();
    var points_3 = jQuery('#members tbody tr:eq(3) td:eq(2)').text().trim();
    var points_4 = jQuery('#members tbody tr:eq(4) td:eq(2)').text().trim();
    var points_5 = jQuery('#members tbody tr:eq(5) td:eq(2)').text().trim();
    var points_6 = jQuery('#members tbody tr:eq(6) td:eq(2)').text().trim();
    var points_7 = jQuery('#members tbody tr:eq(7) td:eq(2)').text().trim();
    var points_8 = jQuery('#members tbody tr:eq(8) td:eq(2)').text().trim();
    var points_9 = jQuery('#members tbody tr:eq(9) td:eq(2)').text().trim();
    var points_10 = jQuery('#members tbody tr:eq(10) td:eq(2)').text().trim();
    var points_11 = jQuery('#members tbody tr:eq(11) td:eq(2)').text().trim();
    var points_12 = jQuery('#members tbody tr:eq(12) td:eq(2)').text().trim();
    var points_13 = jQuery('#members tbody tr:eq(13) td:eq(2)').text().trim();
    var points_14 = jQuery('#members tbody tr:eq(14) td:eq(2)').text().trim();
    var points_15 = jQuery('#members tbody tr:eq(15) td:eq(2)').text().trim();
    var points_16 = jQuery('#members tbody tr:eq(16) td:eq(2)').text().trim();
    var points_17 = jQuery('#members tbody tr:eq(17) td:eq(2)').text().trim();
    var points_18 = jQuery('#members tbody tr:eq(18) td:eq(2)').text().trim();
    var points_19 = jQuery('#members tbody tr:eq(19) td:eq(2)').text().trim();
    var points_20 = jQuery('#members tbody tr:eq(20) td:eq(2)').text().trim();
    var points_21 = jQuery('#members tbody tr:eq(21) td:eq(2)').text().trim();
    var points_22 = jQuery('#members tbody tr:eq(22) td:eq(2)').text().trim();
    var points_23 = jQuery('#members tbody tr:eq(23) td:eq(2)').text().trim();
    var points_24 = jQuery('#members tbody tr:eq(24) td:eq(2)').text().trim();
    var points_25 = jQuery('#members tbody tr:eq(25) td:eq(2)').text().trim();
    var points_26 = jQuery('#members tbody tr:eq(26) td:eq(2)').text().trim();
    var points_27 = jQuery('#members tbody tr:eq(27) td:eq(2)').text().trim();
    var points_28 = jQuery('#members tbody tr:eq(28) td:eq(2)').text().trim();
    var points_29 = jQuery('#members tbody tr:eq(29) td:eq(2)').text().trim();
    var points_30 = jQuery('#members tbody tr:eq(30) td:eq(2)').text().trim();
    var points_31 = jQuery('#members tbody tr:eq(31) td:eq(2)').text().trim();
    var points_32 = jQuery('#members tbody tr:eq(32) td:eq(2)').text().trim();
    var points_33 = jQuery('#members tbody tr:eq(33) td:eq(2)').text().trim();
    var points_34 = jQuery('#members tbody tr:eq(34) td:eq(2)').text().trim();
    var points_35 = jQuery('#members tbody tr:eq(35) td:eq(2)').text().trim();
    var points_36 = jQuery('#members tbody tr:eq(36) td:eq(2)').text().trim();
    var points_37 = jQuery('#members tbody tr:eq(37) td:eq(2)').text().trim();
    var points_38 = jQuery('#members tbody tr:eq(38) td:eq(2)').text().trim();
    var points_39 = jQuery('#members tbody tr:eq(39) td:eq(2)').text().trim();
    var points_40 = jQuery('#members tbody tr:eq(40) td:eq(2)').text().trim();
    var points_41 = jQuery('#members tbody tr:eq(41) td:eq(2)').text().trim();
    var points_42 = jQuery('#members tbody tr:eq(42) td:eq(2)').text().trim();
    var points_43 = jQuery('#members tbody tr:eq(43) td:eq(2)').text().trim();
    var points_44 = jQuery('#members tbody tr:eq(44) td:eq(2)').text().trim();
    var points_45 = jQuery('#members tbody tr:eq(45) td:eq(2)').text().trim();
    var points_46 = jQuery('#members tbody tr:eq(46) td:eq(2)').text().trim();
    var points_47 = jQuery('#members tbody tr:eq(47) td:eq(2)').text().trim();
    var points_48 = jQuery('#members tbody tr:eq(48) td:eq(2)').text().trim();
    var points_49 = jQuery('#members tbody tr:eq(49) td:eq(2)').text().trim();
    var points_50 = jQuery('#members tbody tr:eq(50) td:eq(2)').text().trim();








    })
		.fail((xhr) => {
			onError(xhr);
		})
