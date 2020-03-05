class DatabaseConverter
  # This Service Object takes in a database (of class ActiveRecord::ConnectionAdapters::PostgreSQLAdapter)
  # and converts all tables and its respective columns into a JSON object
  def initialize(database_instance)
    @database = database_instance
  end

  def save_database
    user = User.create!(email: "THIS@gmail.com", password: "123456")
    project = Project.create!(name: "THIS PROJECT", user: user)

    tables = @database.tables

    database = Database.new(name: @database.current_database, project: project)

    if save_tables(database, tables)
      if database.save
        # TODO: tie in with success alert
      else
        # TODO: tie in with error alert
      end
    end
  end

  def save_tables(database, tables)
    tables.each do |key, _|
      table = Table.new(name: key)
      table.database = database

      if save_columns(table)
        table.save
        true
      else
        false
      end
    end
  end

  def save_columns(table)
    @database.columns(table.name).each do |column|
      column = Column.new(name: column.name, datatype: column.type)
      column.table = table

      column.save ? true : false
    end
  end
end
