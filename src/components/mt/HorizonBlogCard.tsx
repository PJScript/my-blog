import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { IBlogCard } from './types';

const HorizontalCard = ({ title, content, createdAt, src, alt }: IBlogCard): JSX.Element => {
  return (
    <Card className="w-full max-w-[48rem] flex-row min-h-500">
      <CardHeader shadow={false} floated={false} className="m-0 w-2/5 shrink-0 rounded-r-none">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody>
        {createdAt}
        {/* <Typography variant="h6" color="gray" className="mb-4 uppercase">
          startups
        </Typography> */}
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {content}
        </Typography>

        <Button variant="text" className="flex items-center gap-2">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Button>
      </CardBody>
    </Card>
  );
};

export default HorizontalCard;
