from sqlalchemy.orm import Session
from app.schemas.user import UserCreate
from app.models.user import User
from app.repositories.user_repo import create_user

def create_user_service(db: Session, user_in: UserCreate):
    user = User(name=user_in.name, email=user_in.email)
    return create_user(db, user)
