print("Make your own certificate")
listOfCertificate = []
allData=[]

def certificateList(event, year, eventHolderName, name):
    certif = [event, year]
    listOfCertificate.append(certif)
    certificate = [name, event, eventHolderName, year]
    allData.append(certificate)

    
def lookCertificate():
    global allData
    for i,certif in enumerate(allData):
        print(i, certif)
        
def firstQuestion():
    name=input("Name: ")
    event= input("Event name: ")
    eventHolderName=input("Event holder name: ")
    year=int(input("Year of event: "))
    certificateList(event, year, eventHolderName, name)
    printCertificate(name, event, eventHolderName, year)
    inp = int(input("are you gonna make certificate again? 1. Yes, 2. Look all certif: \n"))
    if inp==1:
        firstQuestion()
    else:
        lookCertificate()

def printCertificate(name, event, eventHolderName, year):
    print("________________")
    print("Gived to:", "\n", name)
    print("For participating", event)
    print("in", year, "\n")
    print("with pleasure")
    print("signature")
    print(eventHolderName)
    print("________________\n")


        
def option():
    inp = int(input("input 1 to make certificate, 2 to look your certificate you have input and end program : \n"))
    if inp==1:
        firstQuestion()
    elif inp==2:
        lookCertificate()
    else:
        option()

option()
    
    

    
    
    
