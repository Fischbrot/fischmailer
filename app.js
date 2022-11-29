const sendmail = require('sendmail')();

if(process.argv[2] == "help" || process.argv[2] == "--help" || process.argv[2] == "--h" || process.argv[2] == "-h" || process.argv[2] == "-?") {
    console.log(`
        ---------------------------
                SENDMAILER \n
                    BY \n
                FISCHBROT \n         
        ---------------------------
    `)
    console.log(`
        ---------------------------
                ARGUMENTS
                1.) from
                2.) to
                3.) subject
                4.) HTML
        ---------------------------
    `)

    process.exit()
}

let from = process.argv[2] ? process.argv[2] : 'default@default.mail'
let to = process.argv[3] ? process.argv[3] : 'receiver@default.mail'
let subject = process.argv[4] ? process.argv[4] : 'NEW MESSAGE!'
let html = process.argv[5] ? process.argv[5] : 'MESSAGE BODY!'



sendmail({
    from: from,
    to: to,
    subject: subject,
    html: html,
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
