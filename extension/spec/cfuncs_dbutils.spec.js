'use strict';

/* globals DatabaseTable:false*/

describe("DatabaseTable", function(){
	var dbTable = new DatabaseTable('stub');

	beforeEach(function(){
		dbTable.parsed_table = [];
	});

	describe("When first initializing the db", function(){
		it("should be empty",function(){
			expect(dbTable.parsed_table.length).toEqual(0);
		});
	});

	describe("If performing CRUD", function(){
		
		describe("when putting",function(){
			it("should store a string", function(){
				dbTable.putObject("element");
				expect(dbTable.parsed_table).toContain("element");
				expect(dbTable.parsed_table.length).not.toEqual(0);
			});

			it("should store any object", function(){
				var stub_obj = { stub_key: "stub_value" };
				dbTable.putObject(stub_obj);
				expect(dbTable.parsed_table).toContain(stub_obj);
				expect(dbTable.parsed_table.length).not.toEqual(0);
			});
		});


		describe("when removing", function(){
			it("should stay empty if empty", function(){
				dbTable.deleteObjectFromPosition(0);
				expect(dbTable.parsed_table.length).toEqual(0);
				dbTable.deleteObjectFromPosition(1);
				expect(dbTable.parsed_table.length).toEqual(0);
			});

			it("should be empty if removing the only one", function(){
				dbTable.putObject("element");
				expect(dbTable.parsed_table.length).toEqual(1);															
				dbTable.deleteObjectFromPosition(0);
				expect(dbTable.parsed_table.length).toEqual(0);											
			});

			it("should not have the element any more", function(){
				dbTable.putObject("element");
				dbTable.putObject("element1");
				dbTable.putObject("element2");
				expect(dbTable.parsed_table.length).toEqual(3);															
				dbTable.deleteObjectFromPosition(0);
				expect(dbTable.parsed_table).not.toContain("element");				
				expect(dbTable.parsed_table).toContain("element1");				
			});

			it("should be possible to remove giving an object", function(){
				var stub_obj = { stub_key: "stub_value" };
				dbTable.putObject(stub_obj);
				expect(dbTable.parsed_table).toContain(stub_obj);
				dbTable.deleteObject(stub_obj);
				expect(dbTable.parsed_table).not.toContain(stub_obj);				
			});

		});

	});

});