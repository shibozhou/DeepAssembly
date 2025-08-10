from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from app.api import routes
from app.core.conductor import LLMConductor

app = FastAPI(title="DeepAssembly Orchestrator")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(routes.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "DeepAssembly Orchestrator API"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)