import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTeacher } from "../../actions/teachers.action";
import { isEmpty } from "../../utils";
import TeacherEdit from "./TeacherEdit";

// const TeachersShow = ({ teachers, setCreateMode }) => {
//   return (
//     <>
//       <div className="relative w-full overflow-auto">
//         <div className="absolute right-0 mr-8 mt-6">
//           <button
//             onClick={()=> setCreateMode(true)}
//             type="button"
//             className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//           >
//             Ajouter un professeur
//           </button>
//         </div>
//         <div className="flex flex-col my-20 mx-8">
//           <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//             <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//               <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Nom
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Prénom
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Bio
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Téléphone
//                       </th>
//                       <th scope="col" className="relative px-6 py-3">
//                         <span className="sr-only">Edit</span>
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {!isEmpty(teachers) &&
//                       teachers.map((teacher, teacherIdx) => (
//                         <tr
//                           key={teacher.id}
//                           className={
//                             teacherIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
//                           }
//                         >
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                             {teacher.last_name}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                             {teacher.first_name}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {teacher.bio}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {teacher.phone}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             <a
//                               href="#"
//                               className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                             >
//                               Modifier
//                             </a>
//                           </td>
//                         </tr>
//                       ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };



const TeachersShow = ({ teachers, schoolId, setCreateMode }) => {
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [teacher, setTeacher] = useState();
  const dispatch = useDispatch();

  const editTeacher = (teacherToEdit) => {
    setTeacher(teacherToEdit);
    setEditMode(true);
  };

  const handleDelete = (teacherId) => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    dispatch(deleteTeacher(csrf, schoolId, teacherId));
    setDeleteMode(false);
  };

  return (
    <>
      {editMode ? (
        <TeacherEdit
          schoolId={schoolId}
          setEditMode={setEditMode}
          teacher={teacher}
        />
      ) : (
        <>
          <div className="sm:w-100 absolute flex sm:justify-center right-0 mr-8 mt-6">
            <button
              onClick={() => setCreateMode(true)}
              type="button"
              className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Ajouter un professeur
            </button>
            {deleteMode ? (
              <button
                onClick={() => setDeleteMode(false)}
                type="button"
                className="inline-flex lg:ml-2 items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-red-500 hover:bg-red-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Annuler
              </button>
            ) : (
              <button
                onClick={() => setDeleteMode(true)}
                type="button"
                className="inline-flex lg:ml-2 items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-red-500 hover:bg-red-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Supprimer un professeur
              </button>
            )}
          </div>
          <div className="flex flex-col my-20 lg:mx-8 sm:w-100">
            <div className="-my-2 overflow-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Prénom
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Nom
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Biographie
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Téléphone
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {!isEmpty(teachers) &&
                        teachers.map((teacher, teacherIdx) => (
                          <tr
                            key={teacher.id}
                            className={
                              teacherIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {teacher.first_name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {teacher.last_name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {teacher.bio}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {teacher.phone}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              {deleteMode ? (
                                <a
                                  onClick={() => {
                                    if (
                                      window.confirm(
                                        `Voulez vous supprimer ce professeur: ${teacher.first_name} ${teacher.last_name}`
                                      )
                                    ) {
                                      handleDelete(teacher.id);
                                    }
                                  }}
                                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-red-500 hover:bg-red-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                  Supprimer
                                </a>
                              ) : (
                                <a
                                  onClick={() => editTeacher(teacher)}
                                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                  Modifier
                                </a>
                              )}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TeachersShow;