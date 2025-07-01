from fastapi import FastAPI
from app.api import user
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Minimal FastAPI App")

app.include_router(user.router, prefix="/users", tags=["Users"])

origins = [
    "http://localhost:5173",
    "http://localhost:3000",  # optional if you run React differently
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
