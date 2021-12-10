// 处理函数以及数据
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "这是由Context创建出来的",
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const deleteFeedback = (id) => {
    if (window.confirm("你确定删除吗？")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([...feedback, newFeedback]);
  };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  const updateFeedback = (id, updateItem) => {
    console.log(id, updateItem);
    setFeedback(
      feedback.map((item) =>
        (item.id === id ? { ...item, ...updateItem } : item ))
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
