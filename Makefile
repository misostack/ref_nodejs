.PHONY: activate

SHELL := /bin/bash
NVM_DIR ?= $(HOME)/.nvm
NVM_SCRIPT := $(NVM_DIR)/nvm.sh

start_express_001: ## Start the docker containers
	@echo "Start express_001 server"
	@node --inspect express_001/server.js
	@echo "Express server started on port 1337"
watch_express_001: ## Watch the express_001 server
	@echo "Watch express_001 server"
	@npm run nodemon --inspect express_001/server.js
	@echo "Express server is being watched on port 1337"
generate_passwords: ## Generate passwords for development
	@echo "Generate passwords for development"
	@node generate.js
	@echo "Passwords generated"

activate:
	@test -s "$(NVM_SCRIPT)" || { echo "nvm script not found at $(NVM_SCRIPT). Install nvm or adjust NVM_DIR."; exit 1; }
	@. "$(NVM_SCRIPT)" && \
		nvm use "$$(cat .nvmrc)" && \
		echo "NVM activated with Node.js version: $$(cat .nvmrc)" && \
		node -v

