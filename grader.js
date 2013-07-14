#!/usr/bin/env node

var fs = require('fs');
var rest = require('restler');
var program = require('commander');
var cheerio = require('cheerio');
var HTMLFILE_DEFAULT = "index.html";
var CHECKSFILE_DEFAULT = "checks.json";
var URLFILE = "temp.html";
var URL_DEFAULT = "http://mighty-everglades-3762.herokuapp.com/";

var assertFileExists = function(infile){
    var instr = infile.toString();
    if(!fs.existsSync(instr)){
	console.log("%s does not exist. Exiting.", instr);
	process.exit(1);
    }
    return instr;
};

var cheerioHtmlFile = function(htmlfile){
    return cheerio.load(fs.readFileSync(htmlfile));
    
};

var loadChecks = function(checksfile){
    return JSON.parse(fs.readFileSync(checksfile));
};

var checkUrl = function(url, checksfile){
     rest.get(url).on('complete', function(result){
	if(result instanceof Error){
	    this.retry(5000);
	    }
	else{
	    $ = cheerio.load(result);
	    var checks = loadChecks(checksfile).sort();
	    var out = {};
	    for(var ii in checks){
		var present = $(checks[ii]).length > 0;
		out[checks[ii]] = present;
		
	    }
	   
	   console.log(JSON.stringify(out, null, 4));
	}
	
	
    });

    
};

var checkHtmlFile = function(htmlfile, checksfile){
    $ = cheerioHtmlFile(htmlfile);
    var checks = loadChecks(checksfile).sort();
    var out = {};
    for(var ii in checks){
	var present = $(checks[ii]).length > 0;
	out[checks[ii]] = present;
    }
    return out;
}

var clone = function(fn){
    //work around for commander.js issue
    return fn.bind({});
};

if(require.main == module){
    program.
	option('-c, --checks <check_file>', 'Path to checks.json', clone(assertFileExists), CHECKSFILE_DEFAULT).
	option('-f, --file <html_file>', 'Path to index.html', clone(assertFileExists), HTMLFILE_DEFAULT).
	option('-u, --url <url_link>', 'Link to url').
	parse(process.argv);
    if(program.url) {
	var checkJson = checkUrl(program.url, program.checks);	
	}
    else {
	    var checkJson = checkHtmlFile(program.file, program.checks);
	    var outJson = JSON.stringify(checkJson, null, 4);
	    console.log(outJson);
    }

}


else {
    exports.checkHtmlFile = checkHtmlFile;
}
