from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.sql.expression import text
from .database import Base


class Post(Base):
    __tablename__: str = "posts"
    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String, nullable=False)
    content = Column(String, nullable=False)
    published = Column(Boolean, server_default="TRUE", nullable=False)
    create_at = Column(TIMESTAMP(timezone=True),
                       nullable=False, server_default=text("now()"))


class User(Base):
    __tablename__: str = "users"
    id = Column(Integer, primary_key=True, nullable=False)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    create_at = Column(TIMESTAMP(timezone=True),
                       nullable=False, server_default=text("now()"))
