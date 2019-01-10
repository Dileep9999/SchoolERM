import jwt
from django.conf import settings 


def gen_token(payload):
    try:
        token=jwt.encode(payload,settings.JWT['secrect'], algorithm='HS256')
        return token.decode()
    except ValueError:
        return ValueError
    

def decode(token):
    try:
        print(token)
        user=jwt.decode(token.encode(),settings.JWT['secrect'], algorithm='HS256')
        print(user)
        if user: return user['username']
        else:raise KeyError
    except:
        raise KeyError
    
