from app import schemas
from app.config import settings
from .database import clinet, session
import pytest
from jose import jwt


@pytest.fixture
def test_user(clinet):
    user_data = {
        "email": "hello123@gmail.com",
        "password": "password123"
    }
    res = clinet.post("/users/", json=user_data)
    assert res.status_code == 201
    new_user = res.json()
    new_user["password"] = user_data["password"]
    return new_user


def test_user_create(clinet):
    email = "hello123@gmail.com"
    passwd = "password123"
    res = clinet.post("/users/", json={"email": email, "password": passwd})
    new_user = schemas.UserOut(**res.json())
    # print(res.json())
    assert new_user.email == email
    assert res.status_code == 201


def test_login_user(clinet, test_user):
    # print(test_user)
    res = clinet.post(
        "/login/",
        data={"username": test_user["email"],
              "password": test_user["password"]}
    )
    login_res = schemas.Token(**res.json())
    payload = jwt.decode(login_res.access_token,
                         settings.secret_key, algorithms=settings.algorithm)
    id = payload.get("user_id")
    assert id == test_user["id"]
    assert login_res.token_type == "bearer"
    assert res.status_code == 200
