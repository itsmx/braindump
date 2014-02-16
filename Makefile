
DOT=guiflow.dot

guiflow: $(DOT)
	dot -Tsvg $< > $?.svg