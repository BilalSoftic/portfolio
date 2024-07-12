import { createClient } from 'contentful';
import { useEffect } from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: import.meta.env.VITE_CONTENT_TYPE_ID,
      });

      const newProjects = response.items.map((item) => {
        const { title, url, image, source_url, description } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img, source_url, description };
      });
      setProjects(newProjects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

export default useFetchProjects;
