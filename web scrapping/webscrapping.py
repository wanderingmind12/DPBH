from bs4 import BeautifulSoup

with open('website.html','r') as html_file:
    content = html_file.read()
    # print(content)
    soup = BeautifulSoup(content, 'lxml')  # parse the HTML with lxml parser
    # print(soup.prettify())  # prettify the HTML
    tags = soup.find_all('input',type='checkbox')
    # tags = soup.find_all('label')
    # for label in tags:
    #     print(label.text)
    # print(tags)
    print(tags)
