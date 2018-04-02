// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var Author = sequelize.define('Author', {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }
//   },


//     {
//       classMethods: {
//         associate: function (models) {
//           Author.hasMany(models.Blog, {
//             as: 'blogs',
//             foreignKey: 'authorId',
//             sourceKey: 'id',
//           })
//         }
//       }
//     });

 
//   return Author;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    firstName: { type: DataTypes.STRING, required: true},
    lastName: {type: DataTypes.STRING, required: true},
    email: {type: DataTypes.STRING, required: true}
  }, {
    classMethods: {
      associate: function(models) {
        Author.hasMany(models.Blog, {
          as: 'blogs',
          foreignKey: 'authorId',
          sourceKey: 'id'
        })


      }
    }
  });
  return Author;
};