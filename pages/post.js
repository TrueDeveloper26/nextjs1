import MyLayout from "../components/MyLayout";

export default props => <MyLayout>{props.url.query.title}</MyLayout>;
