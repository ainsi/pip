dirname := $(notdir $(patsubst %/,%,$(dir $(abspath $(lastword $(MAKEFILE_LIST))))))

.PHONY: pack check-env
pack: check-env
ifeq (,$(wildcard ../$(dirname).pem))
	@"$(CHROME_PATH)" --pack-extension="$(PWD)"
else
	@cd ..; "$(CHROME_PATH)" --pack-extension="$(PWD)" --pack-extension-key="$(dirname).pem"
endif
	@echo extension $(dirname) packed

check-env:
ifndef CHROME_PATH
	$(error environment variable CHROME_PATH is not defined)
endif
