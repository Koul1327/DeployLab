from fastapi import FastAPI

app = FastAPI(
    title="DeployLab",
    description="Учебная платформа для сборки и развёртывания приложений.",
    version="0.1.0",
)


@app.get("/", tags=["platform"])
def home() -> dict[str, str]:
    """Return a short welcome message from the platform."""
    return {
        "name": "DeployLab",
        "message": "Платформа развёртывания приложений. Начинаем с малого!",
    }


@app.get("/health", tags=["operations"])
def health() -> dict[str, str]:
    """Report whether the application process is ready to answer requests."""
    return {"status": "ok"}

