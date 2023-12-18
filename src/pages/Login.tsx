import { Button, Card, Input, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Login = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          로그인
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          아이디가 없으면 회원가입 혹은 소셜로그인을 이용해주세요
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              이메일
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              crossOrigin={undefined}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              비밀번호
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              crossOrigin={undefined}
            />
          </div>
          {/* <Checkbox
          crossOrigin={undefined}
          label={
            <Typography variant="small" color="gray" className="flex items-center font-normal">
              I agree the
              <a href="#" className="font-medium transition-colors hover:text-gray-900">
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: '-ml-2.5' }}
        /> */}
          <Button className="mt-6" fullWidth>
            로그인
          </Button>

          <Button className="mt-6" fullWidth>
            카카오 로그인
          </Button>

          <Button className="mt-6" fullWidth>
            구글 로그인
          </Button>

          <Button className="mt-6" fullWidth>
            네이버 로그인
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            아이디가 없으신가요?{' '}
            <Link to="/signup" className="font-medium text-gray-900">
              회원가입
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};
export default Login;
