
exports.up = function (knex) {
    return knex.schema
        .createTable('Projects', table => {
            table.increments();
            table.text('Project', 64)
                .unique()
                .notNullable();
            table.string('Description', 255)
                .notNullable();
            table.boolean('Completed')
        })
        .createTable('Actions', table => {
            table.increments();
            table.string('Description', 255)
                .notNullable();
            table.string('Notes', 255)
                .notNullable();
            table.boolean('Completed')
            table.integer('Project_ID')
                .notNullable()
                .references('id')
                .inTable('Projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Combined')
        .dropTableIfExists('Actions')
        .dropTableIfExists('Projects');
};
