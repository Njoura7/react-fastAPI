# 🚀 FastAPI Starter

A minimal FastAPI backend setup to kickstart your project.

## 📦 Requirements

- Python 3.8+
- pip
- virtualenv (optional but recommended)

## 📁 Project Structure

```
.
├── app
│   └── main.py          # FastAPI app entry point
├── requirements.txt     # Project dependencies
└── README.md            # Project documentation
```

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/fastapi-starter.git
cd fastapi-starter
```

### 2. Create and activate a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

## 🚀 Run the server

```bash
uvicorn app.main:app --reload
```

- API: [http://localhost:8000](http://localhost:8000)
- Docs (Swagger UI): [http://localhost:8000/docs](http://localhost:8000/docs)
- ReDoc: [http://localhost:8000/redoc](http://localhost:8000/redoc)

## 🧪 Sample Endpoint

In `app/main.py`:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}
```

## ✅ To-Do

- [ ] Add routers
- [ ] Add environment variables
- [ ] Add database support
- [ ] Add testing setup

## 🛠 Built With

- [FastAPI](https://fastapi.tiangolo.com/)
- [Uvicorn](https://www.uvicorn.org/)

## 📄 License

This project is licensed under the MIT License.
