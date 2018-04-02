// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var Blog = sequelize.define('Blog', {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     article: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     featured: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//     published: {
//       type: DataTypes.DATEONLY,
//       allowNull: true,
//     },
//     authorId: {
//       type: DataTypes.INTEGER,
//     }
//   }, {
//       classMethods: {
//         associate: function (models) {
//           Blog.belongsTo(models.Author, {
//             as: 'author',
//             foreignKey: "authorId",
//             targetKey: 'id'
//           }
//           )
//         }
//       }
//     }
//   )

          

      

    


// return Blog;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    authorId: { type: DataTypes.INTEGER, required: false, defaultValue: 0},
    title: { type: DataTypes.STRING, required: true, allowNull: false}, 
    article: { type: DataTypes.TEXT, required: true, allowNull: false},
    featured: { type: DataTypes.BOOLEAN, required: true, allowNull: false}, 
    published: { type: DataTypes.DATE, required: true}
  }, {
    classMethods: {
      associate: function(models) {
        models.Blog.belongsTo(models.Author, {as: 'authors', foreignKey: 'firstName', targetKey: 'id'});

      }
    }
  });
  return Blog;
};