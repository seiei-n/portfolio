import styles from "./postBody.module.css";

// /*  write body.module.css here */
/*  this is a blog body, blog have title, tags, description, created_at, content */
     
    //  .body {
    //   width: 100%;
    //   height: 100%;
    //   display: flex;
    //   flex-direction: column;
    //   gap: 1rem;
    //  }
     
    //  .body__title {
    //   font-size: 2rem;
    //   font-weight: 600;
    //  }
     
    //  .body__tags {
    //   display: flex;
    //   flex-wrap: wrap;
    //   gap: 0.5rem;
    //   margin-bottom: 0.5rem;
    //  }
     
    //  .body__tag {
    //   padding: 0.25rem 0.5rem;
    //   border-radius: 0.25rem;
    //   background-color: #f1f1f1;
    //   color: #333;
    //   font-size: 0.75rem;
    //   font-weight: 600;
    //  }
     
    //  .body__description {
    //   font-size: 1rem;
    //   font-weight: 400;
    //   margin-bottom: 0.5rem;
    //  }
     
    //  .body__created_at {
    //   font-size: 0.75rem;
    //   font-weight: 400;
    //   color: #999;
    //  }
     
    //  .body__content {
    //   font-size: 1rem;
    //   font-weight: 400;
    //   line-height: 1.5;
    //  }
     
    //  .body__content p {
    //   margin-bottom: 1rem;
    //  }
     
    //  .body__content img {
    //   width: 100%;
    //   height: auto;
    //   margin-bottom: 1rem;
    //  }
     
    //  .body__content h1 {
    //   font-size: 1.5rem;
    //   font-weight: 600;
    //   margin-bottom: 0.5rem;
    //  }
     
    //  .body__content h2 {
    //   font-size: 1.25rem;
    //   font-weight: 600;
    //   margin-bottom: 0.5rem;
    //  }
     
    //  .body__content h3 {
    //   font-size: 1rem;
    //   font-weight: 600;
    //   margin-bottom: 0.5rem;
    //  }
     
    //  .body__content h4 {
    //   font-size: 0.75rem;
    //   font-weight: 600;
    //   margin-bottom: 0.5rem;
    //  }
     
    //  .body__content h5 {
    //   font-size: 0.5rem;
    //   font-weight: 600;
    //   margin-bottom: 0.5rem;
    //  }
     
    //  .body__content h6 {
    //   font-size: 0.25rem;
    //   font-weight: 600;
    //     margin-bottom: 0.5rem;
    //     }
        



type Props = {
    content: string;
};

export default function PostBody({ content }: Props) {
    return (
        <div className={styles.body}>
            <div className={styles.body__content} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        
    );
}

