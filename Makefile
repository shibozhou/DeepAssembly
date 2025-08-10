.PHONY: help setup dev test build clean

help:
	@echo "Available commands:"
	@echo "  make setup    - Install dependencies"
	@echo "  make dev      - Start development environment"
	@echo "  make test     - Run tests"
	@echo "  make build    - Build all services"
	@echo "  make clean    - Clean build artifacts"

setup:
	@echo "Setting up development environment..."
	cd frontend && npm install
	cd backend/orchestrator && pip install -r requirements.txt
	@echo "Setup complete!"

dev:
	docker-compose up -d

test:
	@echo "Running tests..."
	cd backend/orchestrator && pytest
	cd frontend && npm test

build:
	docker-compose build

clean:
	docker-compose down
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type d -name "node_modules" -exec rm -rf {} +