var search_data = {"index":{"searchIndex":["picky","client","convenience","helper","tasks","javascripts","terminal","testclient","add_text()","allocations()","backspace()","cached_interface()","chop_text()","clear_ids()","clear_ids()","default_configuration()","default_configuration()","default_params()","default_params()","defaultize()","empty?()","entries()","flush()","ids()","input()","install_trap()","interface()","left()","log()","move_to()","move_to_ids()","new()","new()","new()","populate_with()","results()","right()","run()","search()","search()","search()","search_and_write()","search_unparsed()","send_search()","send_search()","total()","type_search()","write()","write_ids()","write_results()","picky-client.rb","readme","cursed.rb","terminal.rb","client.rb","convenience.rb","object.rb","helper.rb","readme","have_categories.rb","test_client.rb","tasks.rb","javascripts.rb","update.rake"],"longSearchIndex":["lib/picky-client/tasks/javascripts.rb","picky","picky","picky","picky","picky::tasks","picky","picky","picky::terminal","picky::convenience","picky::terminal","picky::helper","picky::terminal","picky::convenience","picky::terminal","picky::client","picky::client","picky::client","picky::client","picky::client","picky::convenience","picky::convenience","picky::terminal","picky::convenience","picky::helper","picky::terminal","picky::helper","picky::terminal","picky::terminal","picky::terminal","picky::terminal","picky::client","picky::terminal","picky::testclient","picky::convenience","picky::helper","picky::terminal","picky::terminal","picky::client","picky::terminal","picky::testclient","picky::terminal","picky::client","picky::client","picky::testclient","picky::convenience","picky::terminal","picky::terminal","picky::terminal","picky::terminal","files/lib/picky-client_rb.html","files/lib/picky-client/aux/readme.html","files/lib/picky-client/aux/cursed_rb.html","files/lib/picky-client/aux/terminal_rb.html","files/lib/picky-client/client_rb.html","files/lib/picky-client/convenience_rb.html","files/lib/picky-client/extensions/object_rb.html","files/lib/picky-client/helper_rb.html","files/lib/picky-client/spec/readme.html","files/lib/picky-client/spec/support/matchers/have_categories_rb.html","files/lib/picky-client/spec/test_client_rb.html","files/lib/picky-client/tasks_rb.html","files/lib/picky-client/tasks/javascripts_rb.html","files/lib/picky-client/tasks/update_rake.html"],"info":[["Picky","lib/picky-client/aux/cursed.rb","classes/Picky.html"," < ","",1],["Client","Picky","classes/Picky/Client.html"," < Object","",1],["Convenience","Picky","classes/Picky/Convenience.html"," < ","Use this class to extend the hash that the client returns. ",1],["Helper","Picky","classes/Picky/Helper.html"," < Object","This class provides a few view helpers. ",1],["Tasks","Picky","classes/Picky/Tasks.html"," < ","Rake tasks for Picky clients. ",1],["Javascripts","Picky::Tasks","classes/Picky/Tasks/Javascripts.html"," < Object","Copies the latest javascripts into the default javascript folder. Example: # Use as follows in your Rakefile.",1],["Terminal","Picky","classes/Picky/Terminal.html"," < Object","A simple terminal based search. ",1],["TestClient","Picky","classes/Picky/TestClient.html"," < Client","",1],["add_text","Picky::Terminal","classes/Picky/Terminal.html#M000016","(text)","Add the given text to the current text. ",2],["allocations","Picky::Convenience","classes/Picky/Convenience.html#M000032","()","Returns the allocations. ",2],["backspace","Picky::Terminal","classes/Picky/Terminal.html#M000013","()","Delete one character. ",2],["cached_interface","Picky::Helper","classes/Picky/Helper.html#M000041","(options = {})","Returns a cached version if you always use a single language. ",2],["chop_text","Picky::Terminal","classes/Picky/Terminal.html#M000015","()","Chop off one character. ",2],["clear_ids","Picky::Convenience","classes/Picky/Convenience.html#M000037","()","Removes all ids of each allocation. ",2],["clear_ids","Picky::Terminal","classes/Picky/Terminal.html#M000025","()","Clear the result ids. ",2],["default_configuration","Picky::Client","classes/Picky/Client.html#M000009","(options = {})","",2],["default_configuration","Picky::Client","classes/Picky/Client.html#M000008","()","",2],["default_params","Picky::Client","classes/Picky/Client.html#M000011","(options = {})","",2],["default_params","Picky::Client","classes/Picky/Client.html#M000010","()","",2],["defaultize","Picky::Client","classes/Picky/Client.html#M000019","(params = {})","Merges the given params, overriding the defaults. ",2],["empty?","Picky::Convenience","classes/Picky/Convenience.html#M000030","()","Are there any allocations? ",2],["entries","Picky::Convenience","classes/Picky/Convenience.html#M000035","(limit = 20)","Returns either * the rendered entries, if you have used #populate_with _with_ a block OR * the model",2],["flush","Picky::Terminal","classes/Picky/Terminal.html#M000004","()","Flush to STDOUT. ",2],["ids","Picky::Convenience","classes/Picky/Convenience.html#M000031","(limit = nil)","Returns the topmost n results. (Note that not all ids are returned with the results. By default only",2],["input","Picky::Helper","classes/Picky/Helper.html#M000039","(options = {})","",2],["install_trap","Picky::Terminal","classes/Picky/Terminal.html#M000003","()","Install the Ctrl-C handler. ",2],["interface","Picky::Helper","classes/Picky/Helper.html#M000038","(options = {})","Returns a standard search interface for easy starting. ... aka scaffolding ;) Options: * button: The",2],["left","Picky::Terminal","classes/Picky/Terminal.html#M000005","(amount = 1)","Position cursor amount to the left. ",2],["log","Picky::Terminal","classes/Picky/Terminal.html#M000026","(results)","Log a search. ",2],["move_to","Picky::Terminal","classes/Picky/Terminal.html#M000012","(position)","Move cursor to position. ",2],["move_to_ids","Picky::Terminal","classes/Picky/Terminal.html#M000023","()","Move to the id area. ",2],["new","Picky::Client","classes/Picky/Client.html#M000007","(options = {})","",2],["new","Picky::Terminal","classes/Picky/Terminal.html#M000000","(given_uri, id_amount = nil)","",2],["new","Picky::TestClient","classes/Picky/TestClient.html#M000043","(rack_app, options = {})","Example: Picky::TestClient.new(BookSearch, :path => '/books') ",2],["populate_with","Picky::Convenience","classes/Picky/Convenience.html#M000034","(model_class, options = {})","Populates the ids with (rendered) model instances. Give it an AR class and options for the find and it",2],["results","Picky::Helper","classes/Picky/Helper.html#M000040","(options = {})","",2],["right","Picky::Terminal","classes/Picky/Terminal.html#M000006","(amount = 1)","Position cursor amount to the right. ",2],["run","Picky::Terminal","classes/Picky/Terminal.html#M000029","()","Run the terminal. Note: Uses a simple loop to handle input. ",2],["search","Picky::Client","classes/Picky/Client.html#M000020","(query, params = {})","",2],["search","Picky::Terminal","classes/Picky/Terminal.html#M000027","(full = false)","Perform a search. ",2],["search","Picky::TestClient","classes/Picky/TestClient.html#M000044","(query, params = {})","Wraps the search method to always extend the result with Convenience. ",2],["search_and_write","Picky::Terminal","classes/Picky/Terminal.html#M000028","(full = false)","Perform a search and write the results. Handles 404s and connection problems. ",2],["search_unparsed","Picky::Client","classes/Picky/Client.html#M000021","(query, params = {})","Use this method for live queries – they can pass the JSON string with the results through without parsing.",2],["send_search","Picky::Client","classes/Picky/Client.html#M000022","(params = {})","Sends a search to the configured address. Note: For live queries, parsing is actually not really necessary.",2],["send_search","Picky::TestClient","classes/Picky/TestClient.html#M000045","(params = {})","Backend method that we override to not send a real search. ",2],["total","Picky::Convenience","classes/Picky/Convenience.html#M000033","()","Returns the total of results. ",2],["type_search","Picky::Terminal","classes/Picky/Terminal.html#M000017","(character)","Type the given text into the input area. ",2],["write","Picky::Terminal","classes/Picky/Terminal.html#M000014","(text)","Write the text to the input area. ",2],["write_ids","Picky::Terminal","classes/Picky/Terminal.html#M000024","(results)","Write the result ids. ",2],["write_results","Picky::Terminal","classes/Picky/Terminal.html#M000018","(results)","Write the amount of result ids. ",2],["picky-client.rb","files/lib/picky-client_rb.html","files/lib/picky-client_rb.html","","",3],["README","files/lib/picky-client/aux/README.html","files/lib/picky-client/aux/README.html","","Holds auxiliary files that are not loaded with the rest of the client.",3],["cursed.rb","files/lib/picky-client/aux/cursed_rb.html","files/lib/picky-client/aux/cursed_rb.html","","",3],["terminal.rb","files/lib/picky-client/aux/terminal_rb.html","files/lib/picky-client/aux/terminal_rb.html","","",3],["client.rb","files/lib/picky-client/client_rb.html","files/lib/picky-client/client_rb.html","","Ruby Search Client Frontend for the Picky search engine. === Usage ==== 1. Set up search clients. # Create",3],["convenience.rb","files/lib/picky-client/convenience_rb.html","files/lib/picky-client/convenience_rb.html","","",3],["object.rb","files/lib/picky-client/extensions/object_rb.html","files/lib/picky-client/extensions/object_rb.html","","",3],["helper.rb","files/lib/picky-client/helper_rb.html","files/lib/picky-client/helper_rb.html","","",3],["README","files/lib/picky-client/spec/README.html","files/lib/picky-client/spec/README.html","","Holds rspec relevant files that are not loaded with the rest of the client.",3],["have_categories.rb","files/lib/picky-client/spec/support/matchers/have_categories_rb.html","files/lib/picky-client/spec/support/matchers/have_categories_rb.html","","",3],["test_client.rb","files/lib/picky-client/spec/test_client_rb.html","files/lib/picky-client/spec/test_client_rb.html","","",3],["tasks.rb","files/lib/picky-client/tasks_rb.html","files/lib/picky-client/tasks_rb.html","","",3],["javascripts.rb","files/lib/picky-client/tasks/javascripts_rb.html","files/lib/picky-client/tasks/javascripts_rb.html","","",3],["update.rake","files/lib/picky-client/tasks/update_rake.html","files/lib/picky-client/tasks/update_rake.html","","desc \"Update the javascripts etc.\" task :update => [:javascripts]",3]]}}