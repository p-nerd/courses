import pytest
from app import models


@pytest.fixture
def test_vote(test_posts, session, test_user):
    new_vote = models.Vote(
        post_id=test_posts[-1].id, user_id=test_user.get("id"))
    session.add(new_vote)
    session.commit()


def test_votes_on_post(authorized_client, test_posts):
    res = authorized_client.post(
        "/vote/",
        json={
            "post_id": test_posts[-1].id,
            "dir": True
        }
    )

    assert res.status_code == 201


def test_votes_twice_on_post(authorized_client, test_posts, test_vote):
    res = authorized_client.post(
        "/vote/",
        json={
            "post_id": test_posts[-1].id,
            "dir": True
        }
    )

    assert res.status_code == 409


def test_delete_vote(authorized_client, test_posts, test_vote):
    res = authorized_client.post(
        "/vote/",
        json={
            "post_id": test_posts[-1].id,
            "dir": False
        }
    )

    assert res.status_code == 201


def test_delete_vote_non_exist(authorized_client, test_posts):
    res = authorized_client.post(
        "/vote/",
        json={
            "post_id": test_posts[-1].id,
            "dir": False
        }
    )

    assert res.status_code == 404


def test_vote_post_non_exist(authorized_client, test_posts):
    res = authorized_client.post(
        "/vote/",
        json={
            "post_id": 23423423,
            "dir": True
        }
    )

    assert res.status_code == 404


def test_vote_unauthorized_client(client, test_posts):
    res = client.post(
        "/vote/",
        json={
            "post_id": 23423423,
            "dir": True
        }
    )

    assert res.status_code == 401
