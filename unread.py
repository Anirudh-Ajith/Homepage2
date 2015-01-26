import imaplib

html_file = open('/home/anirudh/Desktop/Homepage2/namehere.html','w')

imap_server = imaplib.IMAP4_SSL("imap.gmail.com",993)
imap_server.login("anirudh.ajith","The light side sucks")

imap_server.select('INBOX')
status, response = imap_server.status('INBOX', "(UNSEEN)")
unreadcount = int(response[0].split()[2].strip(').,]'))
print unreadcount 

html_file.write(str(unreadcount))
html_file.close()
