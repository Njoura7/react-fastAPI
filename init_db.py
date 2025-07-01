from app.db.base import Base
from app.db.session import engine
from app.models import user  # make sure to import all models

Base.metadata.create_all(bind=engine)
print("Database initialized successfully.")