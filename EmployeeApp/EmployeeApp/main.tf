# Configure the AWS Provider
provider "aws" {
  version = "~> 6.0"
  region  = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = ami-0fb000fce1f78f9c7
  instance_type = "t3.micro"

}