from http import client

from itsdangerous import json
from app import schemas
from .database import clinet, session


def test_user_create(clinet):
    email = "hello123@gmail.com"
    passwd = "password123"
    res = clinet.post("/users/", json={"email": email, "password": passwd})
    new_user = schemas.UserOut(**res.json())
    print(res.json())
    assert new_user.email == email
    assert res.status_code == 201


def test_login_user(clinet):
    res = clinet.post(
        "/login/",
        data={"username": "hello123@gmail.com", "password": "password123"}
    )
    assert res.status_code == 200
