import React from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { ConfirmBar, DeleteDialoge } from "./styles";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { deleteExpense } from "../../redux/expenseSlice";

const DeleteModal = ({ currentExpense, deleteModal, setDeleteModal }) => {

  const dispatch = useDispatch();

  const layoutShift = window.innerWidth > "1024";

  const modalVariants = layoutShift ? {
    enter: { width: "150px" },
    exit: {
      width: "0%",
      padding: 0,
      transition: {
        delay: 0.5,
      },
    },
  } : {
    enter: { width: "250px", height: '150px' },
    exit: {
      width: "0%",
      padding: 0,
      transition: {
        delay: 0.5,
      },
    },
  }
  ;

  const modalContentVariant = layoutShift ? {
    initial: { y: -75, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    exit: {
      y: 75, opacity: 0
    }
  } : {
    initial: { y: -25, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    exit: {
      y: 25, opacity: 0
    }
  }

  const handleDelete = () => {
    dispatch(deleteExpense(currentExpense.id))
    setDeleteModal((prev) => !prev);
  };

  return (
    <AnimatePresence>
      {deleteModal && (
        <>
        <DeleteDialoge
          key="modal"
          variants={modalVariants}
          initial={"exit"}
          animate={"enter"}
          exit={"exit"}
          transition={{ stiffness: 250 }}
        >
          <ConfirmBar
            key="content"
            variants={modalContentVariant}
            initial={'initial'}
            animate={'enter'}
            exit={'exit'}
            transition={{ delay: 0.2, stiffness: 250 }}
          >
            <p aria-label="Are you sure you would like to delete this expense?">Delete Expense?</p>
            <div>
              <button type="button" onClick={() => setDeleteModal((prev) => !prev)} aria-label="cancel delete expense">
                <AiOutlineCloseCircle style={{height: "45px", width: "45px"}} />
              </button>
              <button type="button" onClick={() => handleDelete()} aria-label="confirm delete expense">
                <AiOutlineCheckCircle style={{height: "45px", width: "45px"}} />
              </button>
            </div>
          </ConfirmBar>
        </DeleteDialoge>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteModal;
