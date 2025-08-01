function getSupport(version) {
	let support = {
		'8.1': 'security',
		'8.2': 'security',
		'8.3': 'active',
		'8.4': 'active',
		'8.5': 'future'
	};
	return support[version] ?? 'eol';
}

dates = {
	'1995-06-08':['1.0'],
	'1997-11-01':['2.0'],
	'1998-06-06':['3.0.0'],
	'1998-12-24':['3.0.6'],
	'1999-06-06':['3.0.9'],
	'1999-06-27':['3.0.11'],
	'2000-01-01':['3.0.13'],
	'2000-04-05':['3.0.16'],
	'2000-05-22':['4.0.0'],
	'2000-06-28':['4.0.1'],
	'2000-06-30':['4.0.1pl2'],
	'2000-08-29':['4.0.2'],
	'2000-10-11':['4.0.3'],
	'2000-10-15':['4.0.3pl1'],
	'2000-10-21':['3.0.18'],
	'2000-12-19':['4.0.4'],
	'2001-01-11':['4.0.4pl1'],
	'2001-04-30':['4.0.5'],
	'2001-06-23':['4.0.6'],
	'2001-12-10':['4.1.0'],
	'2001-12-26':['4.1.1'],
	'2002-02-27':['3.0.18pl1','4.0.6pl1','4.1.0pl1 + 4.1.1pl1'],
	'2002-03-12':['4.1.2'],
	'2002-04-22':['4.2.0'],
	'2002-05-13':['4.2.1'],
	'2002-07-22':['4.2.2'],
	'2002-09-06':['4.2.3'],
	'2002-12-27':['4.3.0'],
	'2003-02-17':['4.3.1'],
	'2003-05-29':['4.3.2'],
	'2005-07-11':['4.4.0'],
	'2003-06-29':['5.0.0b1'],
	'2003-08-25':['4.3.3'],
	'2003-10-30':['5.0.0b2'],
	'2003-11-03':['4.3.4'],
	'2004-03-18':['5.0.0rc1'],
	'2004-03-26':['4.3.5'],
	'2004-04-15':['4.3.6'],
	'2004-04-25':['5.0.0rc2'],
	'2004-06-03':['4.3.7'],
	'2004-06-08':['5.0.0rc3'],
	'2004-07-13':['4.3.8','5.0.0'],
	'2004-08-12':['5.0.1'],
	'2004-09-22':['4.3.9'],
	'2004-09-23':['5.0.2'],
	'2004-12-15':['4.3.10','5.0.3'],
	'2005-03-31':['4.3.11','5.0.4'],
	'2005-07-11':['4.4.0'],
	'2005-09-06':['5.0.5'],
	'2005-10-31':['4.4.1'],
	'2005-11-24':['5.1.0'],
	'2005-11-28':['5.1.1'],
	'2006-01-12':['5.1.2'],
	'2006-01-13':['4.4.2'],
	'2006-05-01':['5.1.3'],
	'2006-05-04':['5.1.4'],
	'2006-08-03':['4.4.3'],
	'2006-08-17':['4.4.4','5.1.5'],
	'2006-08-24':['5.1.6'],
	'2006-11-02':['5.2.0'],
	'2007-02-08':['5.2.1'],
	'2007-02-14':['4.4.5'],
	'2007-03-01':['4.4.6'],
	'2007-05-03':['4.4.7','5.2.2'],
	'2007-05-31':['5.2.3'],
	'2007-08-30':['5.2.4'],
	'2007-11-09':['5.2.5'],
	'2008-01-03':['4.4.8'],
	'2008-05-01':['5.2.6'],
	'2008-08-01':['5.3.0a1'],
	'2008-08-07':['4.4.9'],
	'2008-12-04':['5.2.7','5.3.0a3'],
	'2008-12-08':['5.2.8'],
	'2009-02-26':['5.2.9'],
	'2009-03-10':['5.2.9-1'],
	'2009-03-24':['5.3.0rc1'],
	'2009-04-08':['5.2.9-2'],
	'2009-05-07':['5.3.0rc2'],
	'2009-06-12':['5.2.10rc2','5.3.0rc3'],
	'2009-06-18':['5.2.10'],
	'2009-06-19':['5.3.0rc4'],
	'2009-06-30':['5.3.0'],
	'2009-09-17':['5.2.11'],
	'2009-11-19':['5.3.1'],
	'2009-12-17':['5.2.12'],
	'2010-02-25':['5.2.13'],
	'2010-03-04':['5.3.2'],
	'2010-07-22':['5.2.14','5.3.3'],
	'2010-12-09':['5.2.15'],
	'2010-12-10':['5.3.4'],
	'2010-12-16':['5.2.16'],
	'2011-01-06':['5.2.17','5.3.5'],
	'2011-03-17':['5.3.6'],
	'2011-06-28':['5.4.0a1'],
	'2011-08-18':['5.3.7'],
	'2011-08-23':['5.3.8'],
	'2011-09-27':['5.4.0b1'],
	'2011-10-26':['5.4.0b2'],
	'2011-11-11':['5.4.0rc1'],
	'2011-11-29':['5.4.0rc2'],
	'2011-12-14':['5.4.0rc3'],
	'2011-12-25':['5.4.0rc4'],
	'2012-01-10':['5.3.9'],
	'2012-02-02':['5.3.10'],
	'2012-03-01':['5.4.0'],
	'2012-04-13':['5.4.1rc2'],
	'2012-04-26':['5.3.11','5.4.1'],
	'2012-05-03':['5.3.12','5.4.2'],
	'2012-05-08':['5.3.13','5.4.3'],
	'2012-06-14':['5.3.14','5.4.4'],
	'2012-07-19':['5.3.15','5.4.5'],
	'2012-08-16':['5.3.16','5.4.6'],
	'2012-09-13':['5.3.17','5.4.7'],
	'2012-10-18':['5.3.18','5.4.8'],
	'2012-11-15':['5.5.0a1'],
	'2012-11-22':['5.3.19','5.4.9'],
	'2012-12-20':['5.3.20','5.4.10'],
	'2012-12-21':['5.5.0a2'],
	'2013-01-10':['5.5.0a3'],
	'2013-01-17':['5.3.21','5.4.11'],
	'2013-01-24':['5.5.0a4'],
	'2013-02-21':['5.3.22','5.4.12','5.5.0a5'],
	'2013-03-07':['5.5.0a6'],
	'2013-03-14':['5.3.23','5.4.13'],
	'2013-03-21':['5.5.0b1'],
	'2013-03-28':['5.5.0b2'],
	'2013-04-11':['5.3.24','5.4.14','5.5.0b3'],
	'2013-04-25':['5.5.0b4'],
	'2013-05-09':['5.3.25','5.4.15 + 5.4.16','5.5.0rc1'],
	'2013-05-23':['5.5.0rc2'],
	'2013-06-06':['5.3.26','5.5.0rc3'],
	'2013-06-20':['5.5.0'],
	'2013-07-04':['5.4.17 + 5.4.18'],
	'2013-07-11':['5.3.27 + 5.3.28'],
	'2013-07-18':['5.5.1'],
	'2013-08-15':['5.5.2'],
	'2013-08-22':['5.4.19','5.5.3'],
	'2013-09-19':['5.4.20','5.5.4'],
	'2013-10-17':['5.4.21','5.5.5'],
	'2013-11-14':['5.4.22','5.5.6'],
	'2013-12-12':['5.4.23','5.5.7'],
	'2014-01-09':['5.4.24','5.5.8'],
	'2014-01-23':['5.6.0a1'],
	'2014-02-06':['5.4.25','5.5.9'],
	'2014-02-13':['5.6.0a2'],
	'2014-03-06':['5.4.26','5.5.10','5.6.0a3'],
	'2014-04-03':['5.4.27','5.5.11'],
	'2014-04-11':['5.6.0b1'],
	'2014-04-30':['5.5.12'],
	'2014-05-02':['5.4.28','5.6.0b2'],
	'2014-05-15':['5.6.0b3'],
	'2014-05-29':['5.4.29','5.5.13'],
	'2014-06-05':['5.6.0b4'],
	'2014-06-19':['5.6.0rc1'],
	'2014-06-26':['5.4.30','5.5.14'],
	'2014-07-03':['5.6.0rc2'],
	'2014-07-24':['5.4.31','5.5.15'],
	'2014-07-31':['5.6.0rc3'],
	'2014-08-14':['5.3.29','5.6.0rc4'],
	'2014-08-21':['5.4.32','5.5.16'],
	'2014-08-28':['5.6.0'],
	'2014-09-18':['5.4.33','5.5.17'],
	'2014-10-02':['5.6.1'],
	'2014-10-16':['5.4.34','5.5.18','5.6.2'],
	'2014-11-13':['5.4.35','5.5.19','5.6.3'],
	'2014-12-18':['5.4.36','5.5.20','5.6.4'],
	'2015-01-22':['5.4.37','5.5.21','5.6.5'],
	'2015-02-19':['5.4.38','5.6.6'],
	'2015-02-20':['5.5.22 + 5.5.23'],
	'2015-03-19':['5.4.39','5.6.7'],
	'2015-04-16':['5.4.40','5.5.24','5.6.8'],
	'2015-05-14':['5.4.41','5.5.25','5.6.9'],
	'2015-06-11':['5.4.42','5.5.26','5.6.10','7.0.0a1'],
	'2015-06-25':['7.0.0a2'],
	'2015-07-09':['5.4.43','5.5.27'],
	'2015-07-10':['5.6.11','7.0.0b1'],
	'2015-07-24':['7.0.0b2'],
	'2015-08-06':['5.4.44','5.5.28','5.6.12','7.0.0b3'],
	'2015-08-21':['7.0.0rc1'],
	'2015-09-03':['5.4.45','5.5.29','5.6.13'],
	'2015-09-04':['7.0.0rc2'],
	'2015-09-17':['7.0.0rc3'],
	'2015-10-01':['5.5.30','5.6.14','7.0.0rc4'],
	'2015-10-15':['7.0.0rc5'],
	'2015-10-29':['5.6.15','7.0.0rc6'],
	'2015-11-12':['7.0.0rc7'],
	'2015-11-26':['5.6.16','7.0.0rc8'],
	'2015-12-03':['7.0.0'],
	'2015-12-17':['7.0.1'],
	'2016-01-07':['5.5.31','5.6.17','7.0.2'],
	'2016-02-04':['5.5.32','5.6.18','7.0.3'],
	'2016-03-03':['5.5.33','5.6.19','7.0.4'],
	'2016-03-31':['5.5.34','5.6.20','7.0.5'],
	'2016-04-28':['5.5.35','5.6.21','7.0.6'],
	'2016-05-26':['5.5.36','5.6.22','7.0.7'],
	'2016-06-09':['7.1.0a1'],
	'2016-06-23':['5.5.37','5.6.23','7.0.8'],
	'2016-06-27':['7.1.0a2'],
	'2016-07-07':['7.1.0a3'],
	'2016-07-21':['5.5.38','5.6.24','7.0.9','7.1.0b1'],
	'2016-08-04':['7.1.0b2'],
	'2016-08-18':['5.6.25','7.0.10','7.1.0b3'],
	'2016-09-01':['7.1.0rc1'],
	'2016-09-15':['5.6.26','7.0.11'],
	'2016-09-16':['7.1.0rc2'],
	'2016-09-29':['7.1.0rc3'],
	'2016-10-13':['5.6.27','7.0.12'],
	'2016-10-19':['7.1.0rc4'],
	'2016-10-27':['7.1.0rc5'],
	'2016-11-10':['5.6.28','7.0.13','7.1.0rc6'],
	'2016-12-01':['7.1.0'],
	'2016-12-08':['5.6.29','7.0.14'],
	'2017-01-19':['5.6.30','7.0.15','7.1.1'],
	'2017-02-16':['7.0.16','7.1.2'],
	'2017-03-16':['7.1.3'],
	'2017-03-30':['7.0.17'],
	'2017-04-13':['7.0.18','7.1.4'],
	'2017-05-11':['7.0.19','7.1.5'],
	'2017-06-08':['7.0.20','7.1.6','7.2.0a1'],
	'2017-06-22':['7.2.0a2'],
	'2017-07-06':['5.6.31','7.0.21','7.1.7','7.2.0a3'],
	'2017-07-20':['7.2.0b1'],
	'2017-08-03':['7.0.22','7.1.8','7.2.0b2'],
	'2017-08-17':['7.2.0b3'],
	'2017-08-31':['7.0.23','7.1.9','7.2.0rc1'],
	'2017-09-14':['7.2.0rc2'],
	'2017-09-28':['7.0.24','7.1.10','7.2.0rc3'],
	'2017-10-12':['7.2.0rc4'],
	'2017-10-26':['5.6.32','7.0.25','7.1.11','7.2.0rc5'],
	'2017-11-09':['7.2.0rc6'],
	'2017-11-23':['7.0.26','7.1.12'],
	'2017-11-30':['7.2.0'],
	'2018-01-04':['5.6.33','7.0.27','7.1.13','7.2.1'],
	'2018-02-01':['7.1.14','7.2.2'],
	'2018-03-01':['5.6.34','7.0.28','7.1.15','7.2.3'],
	'2018-03-29':['5.6.35','7.0.29','7.1.16','7.2.4'],
	'2018-04-26':['5.6.36','7.0.30','7.1.17','7.2.5'],
	'2018-05-24':['7.1.18','7.2.6'],
	'2018-06-07':['7.3.0a1'],
	'2018-06-21':['7.1.19','7.2.7','7.3.0a2'],
	'2018-07-05':['7.3.0a3'],
	'2018-07-19':['5.6.37','7.0.31','7.2.8','7.3.0a4'],
	'2018-08-02':['7.3.0b1'],
	'2018-08-16':['7.1.20','7.2.9','7.3.0b2'],
	'2018-08-30':['7.3.0b3'],
	'2018-09-13':['5.6.38','7.0.32','7.1.21 + 7.1.22','7.2.10','7.3.0rc1'],
	'2018-09-28':['7.3.0rc2'],
	'2018-10-11':['7.1.23','7.2.11','7.3.0rc3'],
	'2018-10-25':['7.3.0rc4'],
	'2018-11-08':['7.1.24','7.2.12','7.3.0rc5'],
	'2018-11-22':['7.3.0rc6'],
	'2018-12-06':['5.6.39','7.1.25','7.3.0'],
	'2019-01-10':['5.6.40','7.0.33','7.1.26','7.3.1'],
	'2019-02-07':['7.2.14','7.3.2'],
	'2019-03-07':['7.1.27','7.2.15','7.3.3'],
	'2019-04-04':['7.2.16','7.3.4'],
	'2019-05-02':['7.1.28 + 7.1.29','7.2.17','7.3.5'],
	'2019-05-30':['7.1.30','7.2.18 + 7.2.19','7.3.6'],
	'2019-06-13':['7.4.0a1'],
	'2019-06-26':['7.4.0a2'],
	'2019-07-04':['7.2.20','7.3.7'],
	'2019-07-11':['7.4.0a3'],
	'2019-07-25':['7.4.0b1'],
	'2019-08-01':['7.1.31','7.2.21','7.3.8'],
	'2019-08-08':['7.4.0b2'],
	'2019-08-22':['7.4.0b4'],
	'2019-08-29':['7.1.32','7.2.22','7.3.9'],
	'2019-09-05':['7.4.0rc1'],
	'2019-09-19':['7.4.0rc2'],
	'2019-09-26':['7.2.23','7.3.10'],
	'2019-10-03':['7.4.0rc3'],
	'2019-10-18':['7.4.0rc4'],
	'2019-10-24':['7.1.33','7.2.24','7.3.11'],
	'2019-10-31':['7.4.0rc5'],
	'2019-11-14':['7.4.0rc6'],
	'2019-11-21':['7.2.25','7.3.12'],
	'2019-11-28':['7.4.0'],
	'2019-12-06':['7.2.13'],
	'2019-12-18':['7.2.26','7.3.13','7.4.1'],
	'2020-01-23':['7.2.27','7.3.14','7.4.2'],
	'2020-02-20':['7.2.28','7.3.15','7.4.3'],
	'2020-03-19':['7.2.29','7.3.16','7.4.4'],
	'2020-04-16':['7.2.30','7.3.17','7.4.5'],
	'2020-05-14':['7.2.31','7.3.18','7.4.6'],
	'2020-06-11':['7.3.19','7.4.7'],
	'2020-06-25':['8.0.0a1'],
	'2020-07-09':['7.2.32','7.3.20','7.4.8','8.0.0a2'],
	'2020-07-23':['8.0.0a3'],
	'2020-08-06':['7.2.33','7.3.21','7.4.9','8.0.0b1'],
	'2020-08-21':['8.0.0b2'],
	'2020-09-03':['7.3.22','7.4.10','8.0.0b3'],
	'2020-09-17':['8.0.0b4'],
	'2020-10-01':['7.2.34','7.3.23','7.4.11','8.0.0rc1'],
	'2020-10-16':['8.0.0rc2'],
	'2020-10-29':['7.3.24','7.4.12','8.0.0rc3'],
	'2020-11-12':['8.0.0rc4'],
	'2020-11-19':['8.0.0rc5'],
	'2020-11-26':['7.3.25','7.4.13','8.0.0'],
	'2021-01-07':['7.3.26','7.4.14','8.0.1'],
	'2021-02-04':['7.3.27','7.4.15','8.0.2'],
	'2021-03-04':['7.4.16','8.0.3'],
	'2021-04-29':['7.3.28','8.0.5'],
	'2021-04-30':['7.4.18'],
	'2021-05-06':['7.4.19','8.0.6'],
	'2021-06-03':['7.4.20','8.0.7'],
	'2021-06-10':['8.1.0a1'],
	'2021-06-24':['8.1.0a2'],
	'2021-07-01':['7.3.29','7.4.21','8.0.8'],
	'2021-07-08':['8.1.0a3'],
	'2021-07-22':['8.1.0b1'],
	'2021-07-29':['7.4.22','8.0.9'],
	'2021-08-05':['8.1.0b2'],
	'2021-08-19':['8.1.0b3'],
	'2021-08-26':['7.3.30','7.4.23','8.0.10'],
	'2021-09-02':['8.1.0rc1'],
	'2021-09-16':['8.1.0rc2'],
	'2021-09-23':['7.3.31','7.4.24','8.0.11'],
	'2021-09-30':['8.1.0rc3'],
	'2021-10-14':['8.1.0rc4'],
	'2021-10-21':['8.0.12'],
	'2021-10-22':['7.4.25'],
	'2021-10-28':['7.3.32','8.1.0rc5'],
	'2021-11-11':['8.1.0rc6'],
	'2021-11-18':['7.3.33','7.4.26'],
	'2021-11-19':['8.0.13'],
	'2021-11-25':['8.1.0'],
	'2021-12-16':['7.4.27','8.0.14'],
	'2021-12-17':['8.1.1'],
	'2022-01-20':['8.0.15'],
	'2022-01-21':['8.1.2'],
	'2022-02-17':['7.4.28','8.0.16','8.1.3'],
	'2022-03-17':['8.0.17','8.1.4'],
	'2022-04-14':['7.4.29','8.1.5'],
	'2022-04-15':['8.0.18'],
	'2022-05-12':['8.0.19','8.1.6'],
	'2022-06-09':['7.4.30','8.0.20','8.1.7','8.2.0a1'],
	'2022-06-23':['8.2.0a2'],
	'2022-07-07':['8.0.21','8.1.8','8.2.0a3'],
	'2022-07-21':['8.2.0b1'],
	'2022-08-04':['8.0.22','8.1.9','8.2.0b2'],
	'2022-08-18':['8.2.0b3'],
	'2022-09-01':['8.0.23','8.1.10','8.2.0rc1'],
	'2022-09-15':['8.2.0rc2'],
	'2022-09-29':['7.4.32','8.1.11','8.2.0rc3'],
	'2022-09-30':['8.0.24'],
	'2022-10-13':['8.2.0rc4'],
	'2022-10-27':['8.2.0rc5'],
	'2022-10-28':['8.0.25','8.1.12'],
	'2022-11-03':['7.4.33'],
	'2022-11-10':['8.2.0rc6'],
	'2022-11-24':['8.1.13','8.2.0rc7'],
	'2022-11-26':['8.0.26'],
	'2022-12-08':['8.2.0'],
	'2023-01-05':['8.0.27','8.1.14','8.2.1'],
	'2023-02-02':['8.1.15','8.2.2'],
	'2023-02-14':['8.0.28','8.1.16','8.2.3'],
	'2023-03-16':['8.1.17','8.2.4'],
	'2023-04-13':['8.1.18','8.2.5'],
	'2023-05-11':['8.1.19','8.2.6'],
	'2023-06-08':['8.0.29','8.1.20','8.2.7','8.3.0a1'],
	'2023-06-22':['8.3.0a2'],
	'2023-07-06':['8.1.21','8.2.8','8.3.0a3'],
	'2023-07-20':['8.3.0b1'],
	'2023-08-03':['8.1.22','8.3.0b2'],
	'2023-08-04':['8.0.30'],
	'2023-08-16':['8.2.9'],
	'2023-08-17':['8.3.0b3'],
	'2023-08-31':['8.1.23','8.2.10','8.3.0rc1'],
	'2023-09-14':['8.3.0rc2'],
	'2023-09-28':['8.1.24','8.2.11','8.3.0rc3'],
	'2023-10-12':['8.3.0rc4'],
	'2023-10-26':['8.1.25','8.2.12','8.3.0rc5'],
	'2023-11-09':['8.3.0rc6'],
	'2023-11-23':['8.1.26','8.2.13','8.3.0'],
	'2023-12-21':['8.1.27','8.2.14','8.3.1'],
	'2024-01-18':['8.2.15','8.3.2'],
	'2024-02-15':['8.2.16','8.3.3'],
	'2024-03-14':['8.2.17','8.3.4'],
	'2024-04-11':['8.1.28','8.2.18','8.3.6'],
	'2024-05-09':['8.2.19','8.3.7'],
	'2024-06-06':['8.1.29','8.2.20','8.3.8'],
	'2024-07-04':['8.2.21','8.3.9'],
	'2024-07-05':['8.4.0a1'],
	'2024-07-18':['8.4.0a2'],
	'2024-08-01':['8.2.22','8.3.10','8.4.0a4'],
	'2024-08-15':['8.4.0b3'],
	'2024-08-29':['8.2.23','8.3.11','8.4.0b4'],
	'2024-09-12':['8.4.0b5'],
	'2024-09-26':['8.1.30','8.2.24','8.3.12','8.4.0rc1'],
	'2024-10-10':['8.4.0rc2'],
	'2024-10-24':['8.2.25','8.3.13','8.4.0rc3'],
	'2024-11-07':['8.4.0rc4'],
	'2024-11-21':['8.1.31','8.2.26','8.3.14','8.4.1'],
	'2024-12-19':['8.2.27','8.3.15','8.4.2'],
	'2025-01-16':['8.3.16'],
	'2025-01-17':['8.4.3'],
	'2025-02-13':['8.3.17','8.4.4'],
	'2024-03-13':['8.1.32','8.2.28','8.3.19','8.4.5'],
	'2025-04-10':['8.3.20','8.4.6'],
	'2025-05-08':['8.3.21','8.4.7'],
	'2025-06-05':['8.3.22','8.4.8'],
	'2025-07-03':['8.1.33','8.2.29','8.3.23','8.4.10','8.5.0a1'],
	'2025-07-17':['8.5.0a2']
};
