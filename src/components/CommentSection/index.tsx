import CommentCard from "./CommentCard";
import classes from "./CommentSection.module.css";

export default function CommentSection() {
  return (
    <section className={classes["font-rubik"]}>
      <CommentCard
        id="1"
        user={{
          image: "/images/comment-section/avatars/image-juliusomo.png",
          username: "amyrobson",
        }}
        score={13}
        createdAt="1 month ago"
        content="Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well."
      />
    </section>
  );
}
