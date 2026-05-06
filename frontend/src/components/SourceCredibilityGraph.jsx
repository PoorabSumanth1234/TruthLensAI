import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function SourceCredibilityGraph({ articles }) {

  const data = articles.map((article) => ({

    source: article.source,

    credibility:
      Math.min(
        article.similarity + 10,
        100
      )
  }));

  return (

    <div className="
      bg-[#111]
      p-6
      rounded-3xl
      border
      border-gray-800
      h-[400px]
    ">

      <h2 className="
        text-2xl
        font-bold
        mb-8
      ">
        Source Credibility Graph
      </h2>

      <ResponsiveContainer width="100%" height="85%">

        <BarChart data={data}>

          <XAxis dataKey="source" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="credibility" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default SourceCredibilityGraph;