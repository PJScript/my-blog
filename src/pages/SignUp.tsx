import { Button, Card, Checkbox, Input, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const SignUp = (): JSX.Element => {
  return (
    <div className="flex justify-center w-full">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          회원가입
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          아래 정보를 모두 입력 해주세요
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              닉네임
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
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              비밀번호 확인
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
          <Checkbox
            crossOrigin={undefined}
            label={
              <Typography variant="small" color="gray" className="flex items-center font-normal">
                I agree the
                <Link to="/terms" className="font-medium transition-colors hover:text-gray-900">
                  &nbsp;Terms and Conditions
                </Link>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />
          <Button className="mt-6" fullWidth>
            회원가입
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            이미 아이디가 있으신가요?{' '}
            <Link to="/login" className="font-medium text-gray-900">
              로그인
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};
export default SignUp;
